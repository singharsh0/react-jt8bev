import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/NavBar';
import Card from './components/Card';
import './style.css';


export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card />
      <Footer />
    </div>
  );
}
