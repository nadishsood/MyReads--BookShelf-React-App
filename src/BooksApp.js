import React from "react";
import BooksList from './BooksList';
import AddSearch from './AddSearch';

class BooksApp extends React.Component{

    
    render(){
    console.log(`jfalksfals: ${this.props.books}`);

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksList bookshelfTitle="Currently Reading" />
              <BooksList bookshelfTitle="Want To Read" />
              <BooksList bookshelfTitle="Read" />
            </div>
          </div>
          <AddSearch />
        </div>
      </div>
    );
    }
}

export default BooksApp;
