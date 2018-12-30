import React from 'react';
import styled from 'styled-components';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import ContactForm from '../ContactForm';
import WhiteMap from '../../Assets/Maps/WhiteMap.jpg';

const ContactPageStyles = styled.div`
  background: url(${WhiteMap});
  min-height: 650px;
  margin-top: 15px;
  h2 {
    color: ${props => props.theme.orange};
  }
  div.ui.inverted.segment.contact-info {
    background: rgba(7, 32, 51, 0.8);
    margin-top: 12px !important;
    @media (max-width: 450px) {
      width: 90% !important;
      margin-left: 5%;
    }
    h2 {
      font-family: 'Roboto', sans-serif !important;
      font-weight: 300;
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.165rem;
    }
  }
  div.ui.inverted.segment {
    width: 100% !important;
    height: 525px;
  }
  textarea {
    height: 200px;
  }
  ul {
    display: block;
    padding: 0;
    border: none;
    list-style-type: none;
  }
  li {
    width: 100%;
    padding: 20px 0;
  }
  a {
    color: white;
    font-family: 'Roboto', sans-serif !important;
    font-weight: 300;
    text-transform: none;
    &:hover {
      border: none;
      color: ${props => props.theme.orange};
    }
  }
  p {
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400;
  }
  i {
    color: ${props => props.theme.orange};
  }
`;

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
