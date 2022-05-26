import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../common/Header/index'
import Footer from '../common/Footer'
import HomePage from './HomePage/HomePage';
import ArtistPage from './ArtistPage/ArtistPage';
import AlbumsPage from './AlbumsPage'
import DetailPage from './DetailPage';
function Home(props) {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/artist" component={ArtistPage} />
                <Route path="/albums" exact component={AlbumsPage} />
                <Route path="/albums/:name" exact component={DetailPage} />
            </Switch>
            <Footer />
        </>
    );
}

export default Home;