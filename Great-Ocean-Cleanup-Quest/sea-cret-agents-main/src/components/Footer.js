import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { useState } from 'react';

export function Footer(props) {
  return (
    <footer className="footer">
    <div className="footer-row">
      <p className="footer-text footer-small">Clean Up the ocean for a better future</p>
    </div>
    <div className="footer-row">
        <p className="footer-text footer-medium-large">© 2023 Sea-cret Agents</p>
    </div>
    <hr />
    <div className="footer-row">
        <div className="footer-column">
            <img className="sea-cret-agents-logo" src="./imgs/nav-logo.png" alt="Sea-cret Agents" />
        </div>
        <div className="footer-column">
            <ul className="footer-nav">
                <li><a href="/home" aria-label="Link to home page">Home</a></li>
                <li><a href="/GamePage" aria-label="Link to games page">Game</a></li>
                <li><a href="/Learning" aria-label="Link to Learning page">Learning</a></li>
            </ul>
        </div>
        <div className="footer-column footer-social-media">
            <a href="https://www.instagram.com/"><AiFillInstagram size={30} /></a>
            <a href="https://twitter.com/"><AiOutlineTwitter size={30} /></a>
            <a href="https://www.youtube.com/"><AiFillYoutube size={30} /></a>
        </div>
    </div>
    </footer>
  );
}