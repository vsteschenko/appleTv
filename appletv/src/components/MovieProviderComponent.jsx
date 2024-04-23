import React, { useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieProviderComponent = ({ children }) => {
    const [id, setId] = useState(null);
    const handleMovieClick = (id) => {
        setId(id);
    };
    return (
        <MovieContext.Provider value={{ id, handleMovieClick }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProviderComponent;