import React from 'react';


class Book extends React.Component{
    state = {
        selectedValue: this.props.shelf
    }

    handleChange=(event)=> {
    
    this.setState({selectedValue: event.target.value});

  }
  render(){
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  `url("${this.props.backgroundImage}")`
              }}
            ></div>
            <div className="book-shelf-changer">
              <select value={this.state.selectedValue} onChange={this.handleChange}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthor}</div>
        </div>
      </li>
    )}
}

export default Book;

