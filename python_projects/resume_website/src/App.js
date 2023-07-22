import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
//import React from 'react';

function App() {
  return (
    <div>
        <Header />
        {/* other sections of your website */}
        <About />
        <Footer />
    </div>
  );
}
export default App;
