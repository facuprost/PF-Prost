import CartWidget from "./CartWidget";
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/'><img src="/logo.png" alt="logo" className="nav-logo" /></NavLink>
            <ul className="nav-menu">
                <NavLink className='nav-link' to='/'>Catalogo</NavLink>
                <NavLink className='nav-link' to='/category/jordan'>Jordan</NavLink>
                <NavLink className='nav-link' to='/category/adidas'>Adidas</NavLink>
                <NavLink className='nav-link' to='/category/nike'>Nike</NavLink>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;