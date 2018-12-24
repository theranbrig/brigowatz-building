import React from 'react';
import { Icon, Button, Grid } from 'semantic-ui-react';
import HomeStyles from '../Styles/HomeStyles';
import WhiteLogo from '../../Assets/Logos/WhiteWordLogo.png';
import ContactForm from '../ContactForm';

const Home = () => (
  <HomeStyles>
    <main className="title-splash">
      <img src={WhiteLogo} alt="main logo" className="main-white-logo" />
      <h2>A commitment to quality and excellence is our passion.</h2>
      <h3>Southeastern Wiconsin's Premier Finishing Work</h3>
      <Icon name="chevron down" />
    </main>
    <aside className="divider-box">
      <h4>Contact us to learn more about what we do.</h4>
      <a href="/contact" className="contact-button">
        <Button inverted color="orange">
          Contact Us
        </Button>
      </a>
    </aside>
    <div className="info-boxes">
      <div className="box-1">
        <h2>See Our Work</h2>
      </div>
      <div className="box-2">
        <h2>Learn About Us</h2>
      </div>
    </div>
    <div className="quick-contact">
      <ContactForm />
    </div>
  </HomeStyles>
);

export default Home;
