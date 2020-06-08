import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import './App.css';

import Search from './Search';
import BooksApp from './BooksApp';

class App extends React.Component {
  state = {
    books: []
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.books !== prevState.books) {
      // fetch the new product based and set it to the state of the component
      this.setState(this.state.books);
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then(res => {
      this.setState({ books: res });
    });
  }

  updateShelfOnChange = ({ book, shelf }) => {
    BooksAPI.update(book, shelf).then(res => {
      book.shelf=shelf;
      this.setState(state => ({
        books: state.books
          .filter(stateBook => stateBook.id !== book.id)
          .concat([book])
      }));
    });
  };

  render() {
    console.count();
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              render={props => (
                <BooksApp
                  {...props}
                  books={this.state.books}
                  updateShelf={this.updateShelfOnChange}
                />
              )}
            ></Route>
            <Route
              path="/search"
              exact
              render={props => (
                <Search
                  {...props}
                  books={this.state.books}
                  updateShelf={this.updateShelfOnChange}
                />
              )}
            ></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;


//sending props directly down to the book bypassing the booksList
//when i go back from search after moving a book to the shelf, the homepage component does
// not rerender despite it's state getting changed