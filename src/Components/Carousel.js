import React from 'react';
import { Carousel } from 'react-bootstrap';

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

export default CarouselComponent;
