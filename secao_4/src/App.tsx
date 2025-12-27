import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  let n: number = -15;
  const [name] = useState("Cristian")

  const redTitle = true;

  return (
    <>
      {/* CSS GLOBAL */}
      <h1>REACT COM CSS</h1>

      {/* CSS DE COMPONENT */}
      <MyComponent />
      <p>Este paragrafo pertence ao App.tsx</p>

      {/* Inline CSS */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "25px solid red",
          borderBottom: "15px solid blue",
        }}
      >
        Este paragrafo foi estilizado de forma inline
      </p>

      {/* CSS inline dinamico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS DINAMICO
      </h2>

      <h2 style={name === "Cristian" ? { color: "green" } : { color: "white", backgroundColor:"black" }}>
        CSS DINAMICO {name === "Cristian" && 'mostrando o nome: ' + name}
      </h2>

      {/* Classe Dinamica */}

      <h2 className={redTitle ? "red-title" : "title"}>Esse titulo vai ter classe dinaminca</h2>

      {/* Css gerado por Module */}
      <Title />
    </>
  );
}

export default App;
