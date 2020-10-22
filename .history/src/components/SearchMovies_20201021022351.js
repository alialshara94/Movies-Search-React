import React from 'react';

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit
const SearchMovies = () => {
    return(
        <form className="form">
            <label htmlFor="query" className="Label">Movie Name</label>
            <input type="text" name="query" placeholder="type movie name here .. "/>
            <button type="submit" className="button"></button>
        </form>
    );
}

export default SearchMovies;