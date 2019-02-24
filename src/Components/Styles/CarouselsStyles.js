import styled from 'styled-components';

// Work Page Title Carousels
export const HorizontalCarouselDiv = styled.div`
  img {
    max-height: 600px;
    width: 100%;
  }
  a {
    height: 100%;
    &:hover {
      border-bottom: none;
    }
  }
  a.carousel-control.right,
  a.carousel-control.left {
    background: none;
    margin: 0;
  }
  .ui.grid > .column:not(.row),
  .ui.grid > .row > .column {
    padding-left: 0 !important;
  }
  @media (max-width: 1600px) {
    width: 100%;
  }
`;

export const VerticalCarouselDiv = styled.div`
  background: black;
  height: 100%;
  @media (max-width: 990px) {
    display: none;
  }
  img {
    position: absolute;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }
  div.item,
  div.item.active {
    height: 100% !important;
  }
  div.carousel-inner,
  div.carousel.slide {
    height: 100%;
  }
  a {
    height: 100%;
    &:hover {
      border-bottom: none;
    }
  }
  a.carousel-control.right,
  a.carousel-control.left {
    background: none;
    margin: 0;
  }
`;

// Smaller Carousels for individual pages

export const SmallCarouselDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  div.carousel-inner,
  div.carousel.slide {
    height: 100%;
    width: 90%;
    margin-left: 5%;
  }
  a {
    height: 100%;
    &:hover {
      border-bottom: none;
    }
  }
  a.carousel-control.right,
  a.carousel-control.left {
    background: none;
    margin: 0;
  }
  div.item.active,
  div.item {
    height: 100%;
  }
  img {
    height: 100%;
  }
  h1 {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 3rem;
  }
  #bedrooms {
    padding-bottom: 30px;
  }
  #bathrooms,
  #kitchens {
    padding-top: 30px;
  }
  @media (max-width: 450px) {
    #bathrooms {
      padding-top: 20px;
    }
    #bedrooms {
      padding-bottom: 20px;
    }
  }
`;
