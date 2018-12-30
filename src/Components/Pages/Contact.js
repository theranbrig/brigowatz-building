import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import ContactForm from '../ContactForm';
import ContactPageStyles from '../Styles/ContactPageStyles';

const Contact = () => (
  <ContactPageStyles>
    <Grid centered container>
      <Grid.Column computer={8} tablet={8} mobile={16} stackable>
        <Segment inverted className="contact-info">
          <h2>Get In Touch</h2>
          <ul>
            <li>
              <p>Email:</p>
              <a href="mailto:brigowatzhc@gmail.com">
                <Icon name="mail square" />
                brigowatzhc@gmail.com
              </a>
            </li>
            <li>
              <p>Phone:</p>
              <a href="tel:1-920-253-0474">
                <Icon name="phone square" />
                (920) 253-0474
              </a>
            </li>
            <li>
              <p>Linked-In</p>
              <a href="https://linkedin.com">
                <Icon name="linkedin" />
                Ryan Brigowatz
              </a>
            </li>
            <li>
              <p>Facebook:</p>
              <a href="https://facebook.com">
                <Icon name="facebook" />
                Ryan Brigowatz
              </a>
            </li>
          </ul>
        </Segment>
      </Grid.Column>
      <Grid.Column computer={8} tablet={8} mobile={16} stackable>
        <ContactForm />
      </Grid.Column>
    </Grid>
  </ContactPageStyles>
);

export default Contact;
