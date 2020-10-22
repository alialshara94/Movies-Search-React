import React from 'react';
// https://api.themoviedb.org/3/movie/550?api_key=7c00834b035c312442f00360919940b7
// 
// https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&query=a&page=1

const SearchMovies = () => {

    const searchMovies= async e => {
        e.preventDefault();
        console.log("ok");
        const query = "joker";
        const url = `https://api.themoviedb.org/3/search/company?api_key=${process.env.API_KEY}&query=${query}&page=1`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    };

    return(
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="Label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Joker"/>
            <button type="submit" className="button">Search</button>
        </form>
    );
}

export default SearchMovies;