import React from 'react';
import Guesses from '../Guesses';

function Guess() {
    const [guess, setGuess] = React.useState('');
    const [guesses, setGuesses] = React.useState([]);

    function handleGuesses(event) {
        event.preventDefault();
        setGuesses([...guesses, guess]);
        
        console.log(guess && { guess });
        setGuess('');
    }

  return (
    <>
        <Guesses  guessList={guesses}/>
        <form className="guess-input-wrapper" onSubmit={handleGuesses}>
            <label htmlFor="guess-input" >Enter guess:</label>
            <input 
                required
                title='5 letter word plz!'
                minLength={5} 
                maxLength={5}
                pattern="[a-zA-Z]{5}" 
                id="guess-input" 
                value={guess} 
                type="text" 
                onChange={(event) =>  {
                const nextGuess = event.target.value;
                setGuess(nextGuess.toUpperCase());
            }}/>
        </form>
    </>
 );
}

export default Guess;
