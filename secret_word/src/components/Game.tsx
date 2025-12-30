import { useState, useRef, type FormEvent } from "react";
import "./Game.css";

interface MyProps {
  verifyLetter: any;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}: MyProps) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyLetter(letter.toLowerCase());
    setLetter("");
    if (letterInputRef.current) {
      letterInputRef.current.focus();
    }
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação : {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica da palavra <span>Dica {pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, ind) =>
          guessedLetters.includes(letter) ? (
            <span key={ind} className="letter">
              {letter}
            </span>
          ) : (
            <span key={ind} className="blackSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra: </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            value={letter}
            ref={letterInputRef}
            onChange={(e) => setLetter(e.target.value)}
          />
          <button>Jogar!</button>
        </form>
        <div className="wrongLetters">
          <p>
            Letras já utilizadas {}
            {wrongLetters.map((letter, ind) => (
              <span key={ind}> {letter}, </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
