import React, { useState } from 'react';
import MovieCard from './MovieCard';
// https://api.themoviedb.org/3/movie/550?api_key=7c00834b035c312442f00360919940b7
// 
// https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&query=a&page=1

const SearchMovies = () => {


    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async e => {
        e.preventDefault();
        console.log("ok");
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}&page=1`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    };

    const handleQuerySearch = e => {
        setQuery(e.target.value);
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input className="input" onChange={handleQuerySearch} value={query} type="text" name="query" placeholder="i.e. Joker" />
                <button type="submit" className="button">Search</button>
            </form>
            <MovieCard movies={movies}/>
        </div>
    );
}

export default SearchMovies;