import { NavLink } from 'react-router-dom';
import React from 'react';


const Menu = () => (
    <ul>
        <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink exact activeClassName="active" to="/search">Search</NavLink>
        </li>
        <li>
            <NavLink exact activeClassName="active" to="/about">About</NavLink>
        </li>
        <li>
            <NavLink exact activeClassName="active" to="/state">State</NavLink>
        </li>
    </ul>
);

export default Menu;
