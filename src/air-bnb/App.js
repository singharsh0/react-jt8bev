import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/NavBar';
import Card from './components/Card';
import {data} from './data';
import './style.css';


export default function App() {
  console.log(data,'data')
  const multiCard = data.map((each) => {
    return <Card img={each.coverImg} rating={each.stats.rating} reviewCount={each.stats.reviewCount} country="USA" title={each.title} price={each.price} />
  })
  return (
    <div>
      <Navbar />
      <Main />
      {multiCard}
      <Footer />
    </div>
  );
}
