import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import Bathroom from '../../Assets/Bathrooms/Bathroom4.jpg';
import Kitchen from '../../Assets/Kitchens/Kitchen1.jpg';
import LivingRoom from '../../Assets/LivingRooms/Living_Room4.jpg';
import AboutPageStyles from '../Styles/AboutPageStyles';

const About = () => (
  <AboutPageStyles>
    <Grid centered container>
      <Grid.Row>
        <h1>BRIGOWATZ HOME CONCEPTS LLC</h1>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={4} mobile={16}>
          <Image src={Bathroom} size="medium" />
          <Image src={Kitchen} size="medium" />
          <Image src={LivingRoom} size="medium" />
        </Grid.Column>
        <Grid.Column computer={12} mobile={16}>
          <div>
            <h2>Specializing In</h2>
            <ul>
              <li>Kitchens</li>
              <li>Baths</li>
              <li>Living Spaces</li>
              <li>Basements</li>
              <li>Finish Carpentry</li>
              <li>Tile</li>
              <li>New Construction</li>
              <li>Remodeling</li>
            </ul>
          </div>
          <div id="about-info">
            <h2>About Us</h2>
            <p>
              Founded in 2016, Brigowatz Home Concepts LLC is an independent home contractor that specializes in
              remodels, new construction, and finishing work in Southeastern Wisconsin. With more than a decade of
              experience in the home finishing industry, we work to make your dream home project come true.
            </p>
            <p>
              We are a Licensed Independent Contractor by the State of Wisconsin. Please contact us today and set up a
              consultation for your next home remodeling needs.
            </p>
            <a href="/contact" className="contact-button">
              <Button inverted color="orange">
                Contact Us
              </Button>
            </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </AboutPageStyles>
);

export default About;
