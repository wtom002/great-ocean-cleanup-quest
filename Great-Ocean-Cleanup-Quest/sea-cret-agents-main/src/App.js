import React from 'react';

import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from './components/Home.js';
import { NavBar } from './components/NavBar.js';
import { GamePage } from './components/GamePage.js';
import { Footer } from './components/Footer.js';
import { EducationalResourcePage } from './components/EducationalResourcePage.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { LearningPage } from './components/LearningPage.js';


export default function App(props) {
    return (
        <div>
            <NavBar />
            <main>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/NavBar" element={<NavBar />} />
                        <Route path="/GamePage" element={<GamePage />} />
                        <Route path="/Footer" element={<Footer />} />
                        <Route path="/Learning" element={<LearningPage />} />
                        <Route path="/EducationalResourcePage" element={<EducationalResourcePage />} />
                    </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
            </div>
    );
}
