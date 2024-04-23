import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import './../styles/Home.css';
import ListOfUpNext from '../components/UpNext';
import Premieres from '../components/Premieres';
import TvShow from '../components/TvShow';
import TopTvShow from '../components/TopTvShow';
import Discover from '../components/Discover';
import Nav from '../components/Nav';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <>
            <Nav />
            <Logo />
            <BackgroundImage src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt="A wall full of posters" />
            <div className="SubInfo">Apple TV+ has it all<br/>Start watching now.</div>
            <button className="ButtonSubscribe">Subscribe</button>
            <ListOfUpNext />
            <Premieres />
            <TvShow />
            <TopTvShow />
            <Discover />

        </>
    );
};

export default Home;
