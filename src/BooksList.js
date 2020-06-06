import React from "react";
import Book from './Book';

class BooksList extends React.Component{

  renderBooks=()=>{
      return this.props.books.map(book => {
        return (
          <Book 
            updateShelf={this.props.updateShelf}
            key={book.id}
            id={book.id}
            shelf={book.shelf}
            backgroundImage={book.imageLinks.smallThumbnail}
            bookTitle={book.title}
            bookAuthor={book.authors.join(", ")}
          />
        );
      });
  }
  render(){
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
          <div className="bookshelf-books">  
            <ol className="books-grid">
             {this.renderBooks()}
            </ol>
          </div>
        </div>
      </div>
    );
  }

}

export default BooksList;


