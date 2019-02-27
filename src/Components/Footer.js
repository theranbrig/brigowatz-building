import React from 'react';
import { NavLink } from 'react-router-dom';
import ColorWordLogo from '../Assets/Logos/NewLogoColor.png';
import Image from './Logo';
import FooterStyles from './Styles/FooterStyles';

const Footer = () => (
  <FooterStyles>
    <Image source={ColorWordLogo} title="Brigowatz Home Concepts Simple Logo" />
    <ul>
      <NavLink to="/">
        <a href="/">Home</a>
      </NavLink>
      <NavLink to="/about">
        <a href="/about">About</a>
      </NavLink>
      <NavLink to="/work">
        <a href="/work">Work</a>
      </NavLink>
      <NavLink to="/contact">
        <a href="/contact">Contact</a>
      </NavLink>
    </ul>
    <div className="bottom-info">
      <p>
        Brigowatz Home Concepts is a licensed independent home contractor by the State of Wisconsin. License No.
        23481-8221323
      </p>
    </div>
    <div className="theran-link">
      <p>
        <a href="https://theran.co">Made by theran.co</a>
      </p>
    </div>
  </FooterStyles>
);

export default Footer;
