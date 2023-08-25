import React, { useState } from 'react';

const SearchByName = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (inputValue) {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`);
            const data = await response.json();
            if (data.drinks) {
                onSearch(data.drinks);
                setInputValue('');
            }
        }
    }

    return (
        <div className='searchname-container'>
            <h2>Search by name:</h2>
            <form onSubmit={handleSearch}>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter cocktail name'/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchByName;