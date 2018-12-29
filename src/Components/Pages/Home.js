import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import WOW from 'wowjs';
import HomeStyles from '../Styles/HomeStyles';
import ContactForm from '../ContactForm';
import MiniContactBox from '../MiniContactBox';
import WhiteIcon from '../../Assets/Logos/NewBigWhite.png';

class Home extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <HomeStyles>
        <div rel="preload" className="preload-images" />
        <main rel="preload" id="title-splash" className="wow fadeIn">
          <img src={WhiteIcon} alt="Brigowatz Home Concepts White Logo" className="main-white-logo" />
          <h2>A commitment to quality craftsmanship is our passion.</h2>
          <h3>Southeastern Wisconsin's Premier Finishing Work</h3>
          <Icon name="chevron down" />
        </main>
        <MiniContactBox title="Get in touch to learn more about us." />
        <div rel="preload" id="info-boxes">
          <a href="/work">
            <div className="box-1 wow fadeIn">
              <h2>See Our Work</h2>
              <p>
                See some of the projects that we have worked on. Kitchens, baths, basements, or any of your remodeling
                needs are possible with us.
              </p>
            </div>
          </a>
          <a rel="preload" href="/about">
            <div className="box-2 wow fadeIn">
              <h2>Our Story</h2>
              <p>
                Brigowatz Home Concepts is a locally owned family business. Learn more about us and how we can help meet
                the needs of your family.
              </p>
            </div>
          </a>
        </div>
        <div rel="preload" id="quick-contact" className="wow fadeIn">
          <ContactForm />
        </div>
      </HomeStyles>
    );
  }
}

export default Home;
