import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link, Outlet } from 'react-router-dom';
import Line from './Line';
const tmdbKey = '46bb10e96e2604a7be6dc78deac40fac';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const ListOfUpNext = () => {
    const [upNext, setUpNext] = useState([]);
    
    useEffect(() => {
        fetch(`${tmdbBaseUrl}/movie/upcoming?api_key=${tmdbKey}`)
            .then(response => response.json())
            .then(data => setUpNext(data.results));
    }, []);
    const { handleMovieClick } = useContext(MovieContext);
    //console.log(upNext[1]);// обьект с данными о фильме upNext[0] - первый фильм в списке
    return (
        <>
            <h2 className="Segment">Up Next on Apple TV+</h2>
            <div className="upNext">
                {upNext.map((movie, index) => (
                    <div className="movie" key={index}>
                        <Link key={movie.title} to={`/movie/${movie.title}`} onClick={() => handleMovieClick(movie.id)} >
                            <img className="MoviePoster movie-hover"src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </div>
                ))}
                <Outlet />
            </div> 
            <Line />
        </>
    );
};

export default ListOfUpNext;