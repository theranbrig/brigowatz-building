import React, { Component } from 'react';
import ColorWordLogo from '../Assets/Logos/NewLogoColor.png';
import Image from './Logo';
import FooterStyles from './Styles/FooterStyles';

const Footer = () => (
  <FooterStyles>
    <Image source={ColorWordLogo} title="Main color logo" />
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/work">Work</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <div className="bottom-info">
      <p>
        Brigowatz Home Concepts is a licensed independent home contractor by the State of Wisconsin. License No.
        23481-8221323
      </p>
    </div>
    <div className="theran-link">
      <p>
        <a href="https://theran.co">Built by theran.co</a>
      </p>
    </div>
  </FooterStyles>
);

export default Footer;
