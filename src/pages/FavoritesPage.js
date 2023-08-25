import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoriteList from '../components/FavoriteList';


function FavoritesPage() {
    return (
        <div>
            <Header />
            <FavoriteList />
            <Footer />
        </div>
    );
}

export default FavoritesPage;
