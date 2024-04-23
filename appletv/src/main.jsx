import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import PageNotFound from './pages/PageNotFound';
import MoviePage from './pages/MoviePage';
import MovieProviderComponent from './components/MovieProviderComponent';

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  errorElement: <PageNotFound />,
  }, {
    path: '/login', 
    element: <Login />,
  }, {
    path: '/movie/:title',
    element: <MoviePage />,
  }, {
    path: '/tv/:title',
    element: <MoviePage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProviderComponent>
      <RouterProvider router={router} />
    </MovieProviderComponent>
  </React.StrictMode>,
);