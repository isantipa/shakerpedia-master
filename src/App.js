import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import QuizPage from './pages/QuizPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  )
}

export default App;
