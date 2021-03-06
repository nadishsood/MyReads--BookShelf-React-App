import React from "react";
import BooksList from './BooksList';
import AddSearch from './AddSearch';

class BooksApp extends React.Component {
  getBooks=(shelf)=>{
    switch (shelf) {
      case "currentlyReading":
        return this.props.books.filter(book => {
          return book.shelf === "currentlyReading";
        });
        break;
      case "read":
        return this.props.books.filter(book => {
          return book.shelf === "read";
        });
        break;
      case "wantToRead":
        return this.props.books.filter(book => {
          return book.shelf === "wantToRead";
        });
        break;

      default:
        return [];
    }
  }

  render() {

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksList
                key={"currentlyReading"}
                books={this.getBooks("currentlyReading")}
                bookshelfTitle="Currently Reading"
                updateShelf={this.props.updateShelf}
              />
              <BooksList
                key={"wantToRead"}
                books={this.getBooks("wantToRead")}
                bookshelfTitle="Want To Read"
                updateShelf={this.props.updateShelf}
              />
              <BooksList
                key={"read"}
                books={this.getBooks("read")}
                bookshelfTitle="Read"
                updateShelf={this.props.updateShelf}
              />
            </div>
          </div>
          <AddSearch />
        </div>
      </div>
    );
  }
}

export default BooksApp;
