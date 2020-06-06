import React from "react";
import Book from './Book';

class BooksList extends React.Component{
  render(){
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book />
            </ol>
          </div>
        </div>
      </div>
    );
  }

}

export default BooksList;


