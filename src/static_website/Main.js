import Header from './Header';
import Footer from './Footer';
import { dataObjects } from './dataObjectFunction.js';
import UnOrderedLists from './list';
import React, { StrictMode } from 'react';

export default function MainContent() {
  const data = [
    'Was first released in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100K stars on GitHub',
    'Is maintained by Facebook',
    'Powers thousands of enterprise apps, including mobile apps',
  ];
  const dataAsObj = dataObjects(data);
  return (
    <div>
      <Header />
      <h1 className='main-header'>Fun facts about React</h1>
      <UnOrderedLists ulclass="main-items"dishes={dataAsObj} />
      <Footer />
    </div>
  );
}
