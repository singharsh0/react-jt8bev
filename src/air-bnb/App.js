import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/NavBar';
import Card from './components/Card';
import {data} from './data';
import './style.css';


export default function App() {
  const multiCard = data.map((each) => {
    return <Card item={each} country="USA" />
  })
  return (
    <div>
      <Navbar />
      <Main />
      <section className="card-list">
      {multiCard}
      </section>
      <Footer />
    </div>
  );
}
