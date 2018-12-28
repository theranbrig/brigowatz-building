import styled from 'styled-components';

// Work Page Title Carousels
export const HorizontalCarouselDiv = styled.div`
  img {
    max-height: 600px;
    width: auto;
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
  }
`;

export const VerticalCarouselDiv = styled.div`
  background: black;
  height: 100%;
  @media (max-width: 450px) {
    display: none;
  }
  .ui.grid > .row > div.eleven.wide.computer.sixteen.wide.mobile.column {
    padding: 0px !important;
  }
  img {
    height: 100% !important;
  }
  div.item,
  div.item.active {
    height: 100% !important;
  }
  div.carousel-inner,
  div.carousel.slide {
    height: 100%;
    width: calc(100% + 1rem);
    margin-left: -1rem;
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
  }
`;

// Smaller Carousels for individual pages

export const SmallCarouselDiv = styled.div`
  padding: 20px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  div.carousel-inner,
  div.carousel.slide {
    height: 90%;
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
  }
  h1 {
    text-align: center;
  }
`;
