import "./App.css";
import StartScreen from "./components/StartScreen";
import { useCallback, useEffect, useState } from "react";
import wordsList, { type Words } from "./data/words";
import Game from "./components/Game";
import Over from "./components/Over";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState<number>(0);

  const pickWordAndCategory = () => {
    // pick random category
    const category = Object.keys(words)[
      Math.floor(Math.random() * Object.keys(words).length)
    ] as keyof Words;

    //pick random word in this category
    const word: string =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  //começa o jogo
  const startGame = () => {
    //pick word, and category
    const { word, category } = pickWordAndCategory();

    //criar array de letras da word
    let wordLetters = word.toLocaleLowerCase().split("");

    //fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // processa a letra digitada
  const verifyLetter = (e: string) => {
    //verifica se a letra ja foi utilizada
    if (guessedLetters.includes(e) || wrongLetters.includes(e)) {
      return;
    }
    if (letters.includes(e)) {
      setGuessedLetters((prev) => [...prev, e]);
    } else {
      setWrongLetters((prev) => [...prev, e]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //reinicia game
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage == "end" && <Over retry={retry} score={score}/>}
    </>
  );
}

export default App;
