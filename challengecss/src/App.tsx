import { useState } from "react";
import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="app_h1">Concessionária de Carros</h1>
      <CarDetails />
    </>
  );
}

export default App;
