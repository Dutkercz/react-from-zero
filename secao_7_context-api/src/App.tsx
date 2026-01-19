import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CarrinhoPage from './pages/CarrinhoPage'
import PerfilPage from './pages/PerfilPage'

function App() {

  return (
    <>
      <h1>Seção 7 - React From 0</h1>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/carrinho' element={<CarrinhoPage />} />
          <Route path='perfil' element={<PerfilPage />} />
        </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
