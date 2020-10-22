import React, { useState } from 'react';
// https://api.themoviedb.org/3/movie/550?api_key=7c00834b035c312442f00360919940b7
// 
// https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&query=a&page=1

const SearchMovies = () => {


    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async e => {
        e.preventDefault();
        console.log("ok");
        const api_key = "7c00834b035c312442f00360919940b7";
        const url = `https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${query}&page=1`;

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
                <label htmlFor="query" className="Label">Movie Name</label>
                <input className="input" onChange={handleQuerySearch} value={query} type="text" name="query" placeholder="i.e. Joker" />
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' info'}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchMovies;