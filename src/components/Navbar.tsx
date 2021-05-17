import {NavLink} from 'react-router-dom'
import React from 'react'
export const Navbar:React.FunctionComponent=()=>(
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">список дел</NavLink></li>
                <li><NavLink to="/about">информация</NavLink></li>  
            </ul>
        </div>
    </nav>
)