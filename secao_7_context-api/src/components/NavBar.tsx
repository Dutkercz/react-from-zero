import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
   <nav>
    <NavLink to={"/home"}>Home</NavLink>
    <NavLink to={"/perfil"}>Meu Perfil</NavLink>
    <NavLink to={"/carrinho"}>Meu Carrinho</NavLink>
   </nav>
  )
}

export default NavBar