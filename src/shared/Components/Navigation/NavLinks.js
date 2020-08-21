import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'
const NavLinks =props=>{
    return <ul className="nav-links">
        <li>
            <NavLink exact to="/">Użytkownicy</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">Moje Podróże</NavLink>
        </li>
        <li>
            <NavLink to="/place/new">Nowe Miejsca</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Autoryzacja</NavLink>
        </li>
    </ul>


}

export default NavLinks;