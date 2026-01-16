import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      {/* Aqui são responsaveis por mudar a URL. Ou seja, ao clicar em alguns do
      botoes abaixo, minha URL ira mudar. Consequentemente nosso Route no App.tsx irá captar
      a mudança e ira renderizar a respectiva Page */}

        {/* Links antigos, antes do navLink
        * <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/products">Produtos</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/products">Produtos</NavLink>
    </nav>
  )
}

export default NavBar