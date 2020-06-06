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
  componentDidMount() {
    BooksAPI.getAll().then(res => {
      this.setState({ books: res });
    });
  }
  
  updateItem(id, bookAttributes) {
  var index = this.state.books.findIndex(x=> x.id === id);
  if (index === -1){}
    // handle error
  else{
    this.setState({
      books: [
         ...this.state.books.slice(0,index),
         Object.assign({}, this.state.books[index], bookAttributes),
         ...this.state.books.slice(index+1)
      ]
    });
  }
}
  updateShelfOnChange = ({book, shelf}) => {
    BooksAPI.update(book, shelf).then((res)=>{
      this.updateItem(book.id, {shelf: shelf})
    })
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              render={props => <BooksApp {...props} books={this.state.books} updateShelf={this.updateShelfOnChange} />}
            ></Route>
            <Route 
              path="/search" 
              exact
              render={props => <Search {...props} books={this.state.books} updateShelf= {this.updateShelfOnChange} />}
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