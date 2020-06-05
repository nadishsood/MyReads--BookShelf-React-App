import React from 'react';
import { Link } from 'react-router-dom';

const AddSearch=()=>{
    return (
      <div className="open-search">
        
        <Link className="add" to="/search">Add a book</Link>
    
      </div>
    );
}

export default AddSearch;