import React from "react";
import Book from './Book';

class BooksList extends React.Component{
  renderBooks=()=>{
      return this.props.books.map(book => {
        return (
          <Book 
            key={book.id}
            backgroundImage={book.imageLinks.smallThumbnail}
            bookTitle={book.title}
            bookAuthor={book.authors}
          />
        );
      });
      
    
  }
  render(){
    // console.log(this.props.books)
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


