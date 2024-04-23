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
            <BackgroundImage src='../Images/BackgroundImage.png' alt="A wall full of posters" />
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
