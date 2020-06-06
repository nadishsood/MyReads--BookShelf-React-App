import React from "react";
import BooksList from './BooksList';
import AddSearch from './AddSearch';

class BooksApp extends React.Component{

    render(){
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksList books={this.props.books.filter((book)=>{return book.shelf === "currentlyReading"})} bookshelfTitle="Currently Reading" />
              <BooksList books={this.props.books.filter((book)=>{return book.shelf === "wantToRead"})} bookshelfTitle="Want To Read" />
              <BooksList books={this.props.books.filter((book)=>{return book.shelf === "read"})} bookshelfTitle="Read" />
            </div>
          </div>
          <AddSearch />
        </div>
      </div>
    );
    }
}

export default BooksApp;
