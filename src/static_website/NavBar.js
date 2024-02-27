import { dataObjects } from './dataObjectFunction';
import UnOrderedLists from './list';
import React, { StrictMode } from 'react';

export default function Navbar() {
  const data = ['Pricing', 'About', 'Contact'];
  const dataAsObj = dataObjects(data);

  return (
    <nav className="nav">
      <img src="../assets/logo.svg" alt="React" width="200px"></img>
      <UnOrderedLists ulclass="nav-items" dishes={dataAsObj} />
    </nav>
  );
}
