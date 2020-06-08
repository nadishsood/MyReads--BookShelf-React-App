import React from "react";
import Book from './Book';

class BooksList extends React.Component{


  renderBooks= ()=>{
      return this.props.books.map(book => {
        if (book.authors) {
          var authors = book.authors.join(", ");
        }
        if (book.imageLinks) {
          var image = book.imageLinks.smallThumbnail;
        }
        return (
          <Book
            book={book}
            updateShelf={this.props.updateShelf}
            key={book.id}
            id={book.id}
            shelf={book.shelf}
            backgroundImage={image}
            bookTitle={book.title}
            bookAuthor={authors}
          />
        );
      });
      
  }
  render(){ 
    return (
      <div key={this.props.books}>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">{this.renderBooks()}</ol>
          </div>
        </div>
      </div>
    );
  }

}

export default BooksList;


