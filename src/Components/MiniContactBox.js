import React from 'react';
import { Button } from 'semantic-ui-react';
import MiniDividerStyles from './Styles/MiniContactBoxStyles';

const MiniContactBox = props => (
  <MiniDividerStyles>
    <aside rel="preload" id="divider-box" className="wow fadeIn">
      <h4>{props.title}</h4>
      <a href="/contact" className="contact-button">
        <Button inverted color="orange">
          Contact Us
        </Button>
      </a>
    </aside>
  </MiniDividerStyles>
);

export default MiniContactBox;
