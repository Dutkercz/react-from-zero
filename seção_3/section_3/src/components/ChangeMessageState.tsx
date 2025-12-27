import React from "react";

const ChangeMessageState = ({ handleMessage }: any) => {
  const messagesOptions = [
    "oi",
    "tudo bem?",
    "o dia esta top",
    "trabalho na DB",
  ];

  return (
    <>
      <button onClick={() => handleMessage(messagesOptions[0])}>1</button>
      <button onClick={() => handleMessage(messagesOptions[2])}>2</button>
      <button onClick={() => handleMessage(messagesOptions[1])}>3</button>      
      <button onClick={() => handleMessage(messagesOptions[3])}>4</button>

    </>
  );
};

export default ChangeMessageState;
