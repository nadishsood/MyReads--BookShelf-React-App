import React from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import Book from './Book';

class Search extends React.Component{
  state = {
    value: "", 
    books:[]
  }
  onChange=(event)=>{
    this.setState({value: event.target.value})
    if(event.target.value){
      BooksAPI.search(event.target.value).then((searchBooks)=>{
        if (searchBooks.error) {
          this.setState({ books: [] });
        }else{
        let sameBook;
          searchBooks.forEach(searchBook => {
          sameBook = this.props.books.find(homeBook => homeBook.id === searchBook.id);
          if (sameBook) {
            searchBook.shelf = sameBook.shelf;
          } else {
            searchBook.shelf = "none";
          }
        })};

        this.setState({books: searchBooks})

        })
  }else{
    this.setState({books: []})
  }
  }
  renderBooks=()=>{
    if(this.state.books.length){
     return this.state.books.map(book => {
       if(book.authors){
         var authors = book.authors.join(", ");
       }
       if(book.imageLinks){
          var image = book.imageLinks.smallThumbnail;
       }
       return (
         <Book
           updateShelf={this.props.updateShelf}
           key={book.id}
           id={book.id}
           shelf={book.shelf}
           backgroundImage={image}
           bookTitle={book.title}
           bookAuthor={authors || " "} />
       );
     });
    }else{
      return<div> </div>
    }
  }
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.

                */}
            <input type="text" value={this.state.value} onChange={this.onChange} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.renderBooks()}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
