import React, { useEffect } from 'react';
import '../styles/slider.css';
import libraryImage from '../assets/img/library.jpeg';
import cocktailImage from '../assets/img/cocktail.jpeg';
import quizImage from '../assets/img/quiz.jpg';
import { Link } from 'react-router-dom';

function Slider() {
    const slidesData = [
        {
            image: libraryImage,
            title: 'Library',
            description: 'Consult our cocktails, from our index or do it simply using our search engine by name or ingredient.',
            link: '/library'
        },
        {
            image: cocktailImage,
            title: 'Favorite',
            description: "Check out our list of the world's most popular cocktails.",
            link: '/favorites'
        },
        {
            image: quizImage,
            title: 'Quiz',
            description: 'Play our BartenderQuiz, guess the name of the cocktail with the ingredients that we give.',
            link: '/quiz'
        }
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);
  
    const prevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1));
    };
    
    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        
        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);  // El arreglo vacío indica que el efecto solo se ejecutará una vez.
    
    return (
        <div id="slider">
            <button id="prev-slide" onClick={prevSlide}>
                &lt;
            </button>
            
            <div className="slider-content">
                <ul>
                    {slidesData.map((slide, index) => (
                        <li key={index} style={{ display: currentSlide === index ? 'block' : 'none' }}>
                            <Link to={slide.link} className="slide-link">
                                <div className="slide-content">
                                    <img src={slide.image} alt={slide.title} />
                                    <div className="text-container">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <button id="next-slide" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
}
  
export default Slider;