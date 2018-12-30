import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CarouselComponent = props => (
  <Carousel pauseOnHover interval={props.interval}>
    {props.carouselData.map(project => (
      <Carousel.Item>
        <img rel="preload" src={project.image} alt={project.name} />
        <Carousel.Caption>
          <h3>{project.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

CarouselComponent.propTypes = {
  interval: PropTypes.number.isRequired,
  carouselData: PropTypes.object.isRequired,
};

export default CarouselComponent;
