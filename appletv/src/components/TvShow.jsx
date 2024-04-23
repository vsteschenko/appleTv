import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Line from './Line';
const tmdbKey = '46bb10e96e2604a7be6dc78deac40fac';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const TvShow = () => {
    const [upNext, setUpNext] = useState([]);
    useEffect(() => {
        fetch(`${tmdbBaseUrl}/tv/airing_today?api_key=${tmdbKey}`)
            .then(response => response.json())
            .then(data => {
                setUpNext(data.results)
            });
    }, []);
    return (
        <>
            <h2 className="Segment">Airing Today</h2>
            <div className="upNext">
                {upNext.map((movie, index) => (
                    <div className="movie" key={index}>
                        <Link to={`/tv/${movie.name}`}>
                            <img className="MoviePoster movie-hover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                        </Link>
                    </div>
                ))}
            </div> 
            <Line />
        </>
    );
};

export default TvShow;