import React from 'react';
import logo from "../logo.svg";
import { NavLink } from '../../node_modules/react-router-dom';

export const Navigation = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <NavLink to="/"><h1 className="App-title">Home</h1></NavLink>
                <NavLink to="/dishes"><h1 className="App-title">Dishes</h1></NavLink>
                <NavLink to="/recipes"><h1 className="App-title">Recipes</h1></NavLink>
            </header>
        </div>
    );
};