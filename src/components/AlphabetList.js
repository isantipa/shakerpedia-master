import React from 'react';

function AlphabetList({ onLetterClick }) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className="alphabet-box">
            <ul>
                {alphabet.map(letter => (
                    <li key={letter}>
                        <button onClick={() => onLetterClick(letter)}>
                            {letter.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlphabetList;
