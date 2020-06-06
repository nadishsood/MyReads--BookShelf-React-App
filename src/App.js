import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import './App.css';

import Search from './Search';
import BooksApp from './BooksApp';

class App extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((res)=>{
      this.setState({books: res});
    });
  }
  render(){
 
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              render={props => <BooksApp {...props} books={this.state.books} />}>
            </Route>
            <Route path="/search" exact component={Search}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


