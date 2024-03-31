import React from 'react';
// import Footer from './components/Footer';
// import Main from './components/Main';
import Header from './components/Header';
// import Card from './components/Card';
// import {data} from './data';
import './style.css';
import Meme from './components/Meme';


export default function App() {
  return (
    <div>
      <Header />
      <section className='myform'>
      <Meme />
      </section>
    </div>
  );
}
