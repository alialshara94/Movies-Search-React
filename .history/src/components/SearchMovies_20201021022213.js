import React from 'react';

const SearchMovies = () => {
    return(
        <form className="form">
            <label htmlFor="query" className="Label"></label>
            <input type="text" name="query" placeholder="type movie name here .. "/>
            <button type="submit" className="button"></button>
        </form>
    );
}

export default SearchMovies;