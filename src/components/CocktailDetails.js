import React, { useState, useEffect } from 'react';
import FavoriteButton from './FavoriteButton';

function CocktailDetails({ cocktailId }) {
    const [cocktailDetails, setCocktailDetails] = useState(null);

    useEffect(() => {
        const fetchCocktailDetails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
                const data = await response.json();

                const cocktail = data.drinks[0];

                const ingredients = [];
                for (let i = 1; i <= 15; i++) {
                    if (cocktail[`strIngredient${i}`]) {
                        ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`);
                    } else {
                        break;
                    }
                }

                setCocktailDetails({
                    name: cocktail.strDrink,
                    image: cocktail.strDrinkThumb,
                    ingredients,
                });
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };

        if (cocktailId) {
            fetchCocktailDetails();
        }
    }, [cocktailId]);

    if (!cocktailDetails) {
        return <div>Selecting...</div>;
    }

    return (
        <div className='coktail-container'>
            <div id="cocktail-box">
                <FavoriteButton cocktailId={cocktailId} />
                <h4>{cocktailDetails.name}</h4>
                <img src={cocktailDetails.image} alt={cocktailDetails.name} />
                <ul>
                    {cocktailDetails.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CocktailDetails;
