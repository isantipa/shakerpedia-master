import React from 'react';

function CocktailList({ cocktails, onCocktailClick }) {
    return (
        <div className="letter-container">
            <ul>
                {cocktails.map(cocktail => (
                    <li key={cocktail.idDrink}>
                        <button onClick={() => onCocktailClick(cocktail.idDrink)}>
                            {cocktail.strDrink}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CocktailList;