import React from 'react';
import PropTypes from 'prop-types';

const Image = props => <img src={props.source} alt={props.title} className={props.classNameHere} />;

Image.propTypes = {
  source: PropTypes.string.isRequired,
  classNameHere: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
