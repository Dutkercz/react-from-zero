import "./StartScreen.css";
import React from "react";

const StartScreen = ({ startGame }: any) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique abaixo para começar</p>
      <button onClick={startGame}>COMEÇAR JOGO</button>
    </div>
  );
};

export default StartScreen;
