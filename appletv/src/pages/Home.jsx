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
            <BackgroundImage src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F6PpO1PvfFTV2IHMu38rafti7is6.jpg&f=1&nofb=1&ipt=c077ce216aefb7a3b8c9df5f8b4880f72efbc7cb31c47952446221c683aad6ce&ipo=images' alt="A wall full of posters" />
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
