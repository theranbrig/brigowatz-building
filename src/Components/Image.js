import React, { Component } from 'react';
import ImageFilter from 'react-image-filter';

const SepiaImage = () => (
  <ImageFilter
    image="https://source.unsplash.com/random/1200x800"
    filter="sepia" // see docs beneath
  />
);

export default SepiaImage;
