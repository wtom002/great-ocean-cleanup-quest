import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


export function NavBar(props) {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md p-0 my-nav-color fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="sea-cret-agents-logo" src="./imgs/nav-logo.png" alt="Sea-cret Agents" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item my-nav-font">
                            {/* <a className="nav-link hover-bubble" href="/home" aria-label="Link to home page">Home</a> */}
                            <NavLink exact className={`nav-link hover-bubble ${location.pathname === '/home' ? 'active-bubble' : ''}`} to="/home" aria-label="Link to home page">Home</NavLink>
                        </li>
                        <li className="nav-item my-nav-font">
                            {/* <a className="nav-link hover-bubble" href="/GamePage" aria-label="Link to games page">Game</a> */}
                            <NavLink exact className={`nav-link hover-bubble ${location.pathname === '/GamePage' ? 'active-bubble' : ''}`} to="/GamePage" aria-label="Link to games page">Game</NavLink>
                        </li>
                        <li className="nav-item my-nav-font">
                            {/* <a className="nav-link hover-bubble" href="/GamePage" aria-label="Link to games page">Games</a> */}
                            <NavLink exact className={`nav-link hover-bubble ${location.pathname === '/Learning' ? 'active-bubble' : ''}`} to="/Learning" aria-label="Link to learning page">Learning</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}