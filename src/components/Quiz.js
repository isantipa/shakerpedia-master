import React, { useEffect, useState, useRef } from "react";
import '../styles/quiz.css'

const apiUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php';

const Quiz = () => {
  const [cocktail, setCocktail] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState('');
  const messageRef = useRef(null);

  useEffect(() => {
    buildGame();
  }, []);

  useEffect(() => {
    // Scroll to the message element whenever the message changes
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  const getCocktail = async () => {
    const { drinks: [cocktail] } = await (await fetch(apiUrl)).json();
    const ingredients = Object.entries(cocktail)
      .filter(([key, value]) => key.startsWith('strIngredient') && value)
      .map(([key, value]) => value);

    return { cocktail, ingredients };
  };

  const getOptions = async (correctCocktail, numIncorrect) => {
    const incorrectOptions = Array.from({ length: numIncorrect }, async () => {
      const { drinks: [incorrectCocktail] } = await (await fetch(apiUrl)).json();
      return { name: incorrectCocktail.strDrink, isCorrect: false };
    });

    return Promise.all([
      { name: correctCocktail.strDrink, isCorrect: true },
      ...incorrectOptions
    ]).then(shuffle);
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const buildGame = async () => {
    const { cocktail, ingredients } = await getCocktail();
    const options = await getOptions(cocktail, 2);

    setMessage('');
    setCocktail(cocktail);
    setIngredients(ingredients);
    setOptions(options);
  };

  const handleButtonClick = (isCorrect) => {
    setMessage(isCorrect ? 'Correct answer!' : 'Incorrect answer!');
    // Disables all buttons after an answer is clicked
    setOptions(options.map(option => ({ ...option, isDisabled: true })));
  };

  return (
    <div className="quiz-container">
      <h3>What cocktail has these ingredients?</h3>
      <ul className="cocktail-ingredients">
        {ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
      </ul>
      <div className="cocktail-options">
        {options.map((option, i) => (
          <button key={i} onClick={() => handleButtonClick(option.isCorrect)} disabled={option.isDisabled}>
            {option.name}
          </button>
        ))}
      </div>
      <div className="message" ref={messageRef}>{message}</div>
      <button className="new-game" onClick={buildGame}>Try Again!</button>
    </div>
  );
}

export default Quiz;