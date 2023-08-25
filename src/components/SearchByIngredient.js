import React, { useState } from 'react';

const SearchByIngredient = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSearch = async (event) => {
    event.preventDefault();

    const ingredients = inputValue.split(/[, ]+/).filter(Boolean);

    if (ingredients.length === 0) {
      return;
    }

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredients.join(',')}`);
    const data = await response.json();

    onSearch(data.drinks || []);
    setInputValue('');
  }

  return (
    <div className='searchingredient-container'>
      <h2>Enter the ingredients:</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter ingredients' />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default SearchByIngredient;
