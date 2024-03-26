import React, { StrictMode } from 'react';
import '../index.css';
const urlLinkedin = 'https://www.linkedin.com/in/bharatiya/';
const urlGitHub = 'https://github.com/singharsh0';

export default function Footer() {
  return (
    <section className='footer'>
      <img src='../assets/LD.svg' href={urlLinkedin} target='_blank'></img>
      <img src='../assets/GH.svg' href={urlGitHub} target='_blank'></img>
    </section>
  );
}
