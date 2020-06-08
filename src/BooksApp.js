import React from "react";
import BooksList from './BooksList';
import AddSearch from './AddSearch';
import equal from 'fast-deep-equal';

class BooksApp extends React.Component {
  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps.open !== true && this.state.open == false) {
  //     this.props.onWillOpen();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //  if (!equal(this.props.books, prevProps.books)) {
  //   console.log('hiiiii');
  //  }

  // }
  
  // state = {books: this.props.books}

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.books !== prevState.books) {
  //     console.log('props changed. Return an object to change state');
  //     return {
  //       books: nextProps.books
  //     }
  //   }}

  // renderBooksList=()=>{
  //   //each book has a shelf make new array for each shelf containing books
  //   this.props.books.map((book)=>{
  //     switch(book.shelf){
  //       case "read":
  //         ReadBooks.push()
  //     }
  //   })
  //   // return (
  //   //   <BooksList
  //   //     books={this.props.books.filter(book => {
  //   //       return book.shelf === "currentlyReading";
  //   //     })}
  //   //     bookshelfTitle="Currently Reading"
  //   //     updateShelf={this.props.updateShelf}
  //   //   />
  //   // )
  // }

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
                // books={this.getBooks(this.currentlyReading())}
                key={"currentlyReading"}
                books={this.getBooks("currentlyReading")}
                // books={this.props.books}
                bookshelfTitle="Currently Reading"
                updateShelf={this.props.updateShelf}
              />
              <BooksList
                key={"wantToRead"}
                // books={this.props.books}
                books={this.getBooks("wantToRead")}
                bookshelfTitle="Want To Read"
                updateShelf={this.props.updateShelf}
              />
              <BooksList
                key={"read"}
                // books={this.props.books}
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
