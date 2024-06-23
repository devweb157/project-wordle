import React from 'react';

function Guesses({ guessList }) {
    return (
        <div className='guess-result'>
            {guessList.map(guess => (
                <p key={crypto.randomUUID()} className='guess'>{guess}</p>
            ))}
        </div>
    );
}

export default Guesses;
