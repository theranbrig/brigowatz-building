import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import WOW from 'wowjs';
import HomeStyles from '../Styles/HomeStyles';
import WhiteLogo from '../../Assets/Logos/WhiteWordLogo.png';
import ContactForm from '../ContactForm';

class Home extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <HomeStyles>
        <main id="title-splash" className="wow fadeIn">
          <img src={WhiteLogo} alt="main logo" className="main-white-logo" />
          <h2>A commitment to quality craftsmanship is our passion.</h2>
          <h3>Southeastern Wisconsin's Premier Finishing Work</h3>
          <Icon name="chevron down" />
        </main>
        <aside id="divider-box" className="wow fadeIn">
          <h4>Contact us to learn more about what we do.</h4>
          <a href="/contact" className="contact-button">
            <Button inverted color="orange">
              Contact Us
            </Button>
          </a>
        </aside>
        <div id="info-boxes">
          <a href="/work">
            <div className="box-1 wow fadeIn">
              <h2>See Our Work</h2>
              <p>
                See some of the projects that we have worked on. Kitchens, baths, basements, or any of your remodeling
                needs are possible with us.
              </p>
            </div>
          </a>
          <a href="/about">
            <div className="box-2 wow fadeIn">
              <h2>Our Story</h2>
              <p>
                Brigowatz Home Concepts is a locally owned family business. Learn more about us and how we can help meet
                the needs of your family.
              </p>
            </div>
          </a>
        </div>
        <div id="quick-contact" className="wow fadeIn">
          <ContactForm />
        </div>
      </HomeStyles>
    );
  }
}

export default Home;
