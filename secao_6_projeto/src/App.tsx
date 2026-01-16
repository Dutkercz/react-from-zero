import "./App.css";

//react router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Items from "./pages/Items";
import ItemDetail from "./pages/ItemDetail";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import { Search } from "./pages/Search";

function App() {
  return (
    <>
      <h1 style={{ color: "white", background: "blue" }}>Reacter Router</h1>
      <BrowserRouter>
        <NavBar />
        {/* os comp. que estiverem aqui estarãoa sempre sempre presentes na pagina (menus, etc) */}

        {/* Adicionando Parametro de busca */}
        <SearchForm />
        <Routes>
          {/* esse comp mudam o objetivo/conteudo da página (home, details, form, etc) 
          o Route fica 'observando' a URL do navegador, quando a URL bater com algum dos Route abaixo
          ele desenha a respectiva página.*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Items />} />
          <Route path="/products/:id" element={<ItemDetail />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          {/* simulando uma rota antiga que foi modificada, nesse caso company, virou about e 
          ao entrar nesse path, devemos ser redirecionados para /about */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
