import Info from './Info.js';
import About from './About.js';
import Interest from './Interest.js';
import Footer from './Footer';
import React from 'react';

export default function MainContent() {

  return (
    <div>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
