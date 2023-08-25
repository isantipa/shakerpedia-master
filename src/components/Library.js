import React, { useState, useEffect, useRef } from 'react';
import AlphabetList from './AlphabetList';
import CocktailList from './CocktailList';
import CocktailDetails from './CocktailDetails';
import SearchByName from './SearchByName';
import SearchByIngredient from './SearchByIngredient';
import '../styles/library.css';

function Library() {
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktailId, setSelectedCocktailId] = useState(null);

    const detailsRef = useRef(null);

    const handleSearch = (drinks) => {
        setCocktails(drinks);
    }

    const handleLetterClick = async letter => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}&limit=50`);
            const data = await response.json();

            setCocktails(data.drinks);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleLetterClick('A');
    }, []);

    useEffect(() => {
        if (detailsRef.current) {
            setTimeout(() => detailsRef.current.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, [selectedCocktailId]);

    return (
        <div className="library-container">
            <SearchByName onSearch={handleSearch} />
            <SearchByIngredient onSearch={handleSearch} onCocktailClick={setSelectedCocktailId} />
            <div>
                <h3>Serch by Letter:</h3>
            </div>
            <AlphabetList onLetterClick={handleLetterClick} />
            <CocktailList cocktails={cocktails} onCocktailClick={setSelectedCocktailId} />
            <div ref={detailsRef}>
                {selectedCocktailId && <CocktailDetails cocktailId={selectedCocktailId} />}
            </div>
        </div>
    );
}

export default Library;
