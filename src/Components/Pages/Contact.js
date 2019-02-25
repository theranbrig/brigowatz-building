import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import ContactForm from '../ContactForm';
import ContactPageStyles from '../Styles/ContactPageStyles';

const Contact = () => (
  <ContactPageStyles>
    <div className="contact-info">
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
            <p>Facebook:</p>
            <a href="https://facebook.com">
              <Icon name="facebook" />
              Ryan Brigowatz
            </a>
          </li>
        </ul>
      </Segment>
    </div>
    <div className="contact-form">
      <ContactForm />
    </div>
  </ContactPageStyles>
);

export default Contact;
