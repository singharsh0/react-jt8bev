import React, { StrictMode } from 'react';
import './index.css';
const urlLinkedin = 'https://www.linkedin.com/in/bharatiya/';
const sendMail = "mailto:xyz@abc.com?subject=Me&body=Hello!";

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
        <a className='mail-button' href={sendMail}><img src="../assets/Mail.svg"></img>Email</a>
        <a className='linkedin-button' href={urlLinkedin} target='_blank'><img src="../assets/linkedin.svg" height={20}></img>LinkedIn</a>
      </section>
    </section>
  );
}
