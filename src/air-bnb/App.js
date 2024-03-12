import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/NavBar';
import Card from './components/Card';
import {data} from './data';
import './style.css';


export default function App() {
  console.log(data,'data')
  return (
    <div>
      <Navbar />
      <Main />
      <Card img="athele.svg" rating={5.0} reviewCount={6} country="USA" title="Life lessons with Katie Zaferes" price={136} />
      <Footer />
    </div>
  );
}
