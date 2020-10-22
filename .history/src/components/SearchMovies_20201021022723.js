import React from 'react';


const SearchMovies = () => {
    return(
        <form className="form">
            <label htmlFor="query" className="Label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Joker"/>
            <button type="submit" className="button">Search</button>
        </form>
    );
}

export default SearchMovies;