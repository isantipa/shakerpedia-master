import React, { useState, useEffect } from 'react';
import CocktailDetails from './CocktailDetails';
import '../styles/favorite.css';

function FavoriteList() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
            const favoriteCocktails = [];

            for (let id of favoriteIds) {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                favoriteCocktails.push(data.drinks[0]);
            }

            setFavorites(favoriteCocktails);
        };

        fetchFavorites();
    }, []);

    return (
        <div className='favorites-container'>
            {favorites.map(cocktail => <CocktailDetails key={cocktail.idDrink} cocktailId={cocktail.idDrink} />)}
        </div>
    );
}

export default FavoriteList;
