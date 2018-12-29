import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import ContactForm from '../ContactForm';
import WhiteMap from '../../Assets/Maps/WhiteMap.jpg';

const ContactPageStyles = styled.div`
  background: url(${WhiteMap});
  min-height: 650px;
  position: relative;
  .ui.segment {
    position: absolute;
    height: 100px;
    margin: 100px 0 0 !important;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Contact = () => (
  <ContactPageStyles>
    <div>
      <Segment inverted className="contact-info">
        <h1>Get In Touch</h1>
      </Segment>
      <ContactForm />
    </div>
  </ContactPageStyles>
);

export default Contact;
