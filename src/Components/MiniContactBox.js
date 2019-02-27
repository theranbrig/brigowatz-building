import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MiniDividerStyles from './Styles/MiniContactBoxStyles';

const MiniContactBox = props => (
  <MiniDividerStyles>
    <aside rel="preload" id="divider-box" className="wow fadeIn">
      <h4>{props.title}</h4>
      <NavLink to="/contact">
        <a className="contact-button" href="/contact">
          Contact Us
        </a>
      </NavLink>
    </aside>
  </MiniDividerStyles>
);

MiniContactBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MiniContactBox;
