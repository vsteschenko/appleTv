import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import './../styles/MoviePage.css';
import Nav from '../components/Nav';
import ButtonWatch from '../components/ButtonWatch';
import Logo from '../components/Logo';
import ListOfUpNext from '../components/UpNext';

const MoviePage = () => {
    const params = useParams();
    const movieName = params.title;
    const url = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(movieName)}`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJiMTBlOTZlMjYwNGE3YmU2ZGM3OGRlYWM0MGZhYyIsInN1YiI6IjY2MGIxMGJkYzhhNWFjMDE3Yzc4OGZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7heM7LKnVo4re3mti0mT_UofL0OAaRlhiJTG1UDr9Jo'
        }
      };   
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => setMovie(data.results[0]))
            .catch(error => console.log(error))
    }, []);

    if (!movie) return null;
    return (
        <div className="MoviePage">
            <Nav />
            <Logo />
            <h1 className="Title">{movie.title}</h1>
            <img className="MovieImage" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <ButtonWatch id="MoviePage"/>
            <div className="Overview">{movie.overview}</div>
            <div className="Genres">
                {
                movie.genres ?
                movie.genres.map((genre, index) => (
                    <span key={index}>{genre.name} </span>
                )) : "N/A"
                }
            </div>
            <ListOfUpNext />
        </div>
        )
};

export default MoviePage;