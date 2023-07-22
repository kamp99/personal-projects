import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import React from 'react';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Header />
        <Routes>
          {/* other sections of your website */}
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}
export default App;
