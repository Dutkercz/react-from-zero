import "./App.css";

//react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Items from "./pages/Items";
import ItemDetail from "./pages/ItemDetail";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <h1 style={{ color: "white", background: "blue" }}>Reacter Router</h1>
      <BrowserRouter>
        <NavBar />
        {/* os comp. que estiverem aqui estarãoa sempre sempre presentes na pagina (menus, etc) */}
        <Routes>
          {/* esse comp mudam o objetivo/conteudo da página (home, details, form, etc) 
          o Route fica 'observando' a URL do navegador, quando a URL bater com algum dos Route abaixo
          ele desenha a respectiva página.*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Items />} />
          <Route path="/products/:id" element={<ItemDetail />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
