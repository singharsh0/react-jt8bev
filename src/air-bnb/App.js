import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/NavBar';
import './style.css';


export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
