import React from 'react';
import { NavLink } from "react-router-dom";
import styled from'./Header.module.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styled.header}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;