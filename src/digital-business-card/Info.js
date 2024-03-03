import React, { StrictMode } from 'react';
import './index.css';

function mailtrigger() {
  console.log('in')
  window.open("mailto:xyz@abc.?subject=Me&body=Hello!");
}
export default function Header() {
  return (
    <section>
      <section className='info-details'>
        <img src="../assets/profile_pic.svg"></img>
        <h1>Harsh Singh</h1>
        <span>Full Stack Developer</span>
        <h5>harshsingh22267@gmail.com</h5>
      </section>
      <section className='info-links' >
        <button className='mail-button' onClick={mailtrigger()}><img src="../assets/Mail.svg"></img>Email</button>
        <button className='linkedin-button '><img src="../assets/linkedin.svg" height={20}></img>LinkedIn</button>
      </section>
    </section>
  );
}
