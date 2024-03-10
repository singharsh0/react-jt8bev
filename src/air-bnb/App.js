import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import { dataObjects } from './dataObjectFunction.js';
import UnOrderedLists from './list';
import './style.css';


export default function App() {
  return (
    <div>
      <Navbar />
      <h1 className='main-header'>Fun facts about React</h1>
      <Footer />
    </div>
  );
}
