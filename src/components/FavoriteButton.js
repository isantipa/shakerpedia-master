import React, { useState, useEffect } from 'react';
import star from '../assets/img/star.png';
import star2 from '../assets/img/star2.png';


function FavoriteButton({ cocktailId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(cocktailId));
    }, [cocktailId]);

    const handleClick = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (isFavorite) {
            const newFavorites = favorites.filter(fav => fav !== cocktailId);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            favorites.push(cocktailId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        setIsFavorite(!isFavorite);
    };

    return (
        <img className="favorite-button" src={isFavorite ? star2 : star} onClick={handleClick} alt="favorite" />
    );
}

export default FavoriteButton;
