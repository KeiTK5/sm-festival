import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../common/Header/index'
import Footer from '../common/Footer'
import HomePage from './HomePage/HomePage';
import ArtistPage from './ArtistPage/ArtistPage';
import AlbumsPage from './AlbumsPage'

function Home(props) {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/artist">
                    <ArtistPage />
                </Route>
                <Route path="/albums">
                    <AlbumsPage />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default Home;