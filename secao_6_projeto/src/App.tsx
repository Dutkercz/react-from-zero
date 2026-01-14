import "./App.css";

//react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Items from "./pages/Items";

function App() {
  return (
    <>
      <h1 style={{ color: "white", background: "blue" }}>Reacter Router</h1>
      <BrowserRouter>
          <NavBar />
        {/* os comp. que estiverem aqui estarãoa sempre sempresentes na pagina (menus, etc) */}
        <Routes>
          {/* esse comp mudam o objetivo/conteudo da página (home, details, form, etc) */}
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
