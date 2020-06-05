import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import './App.css';

import Search from './Search';
import BooksApp from './BooksApp';

class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={BooksApp}></Route>
            <Route path="/search" exact component={Search}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


