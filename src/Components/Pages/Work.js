import React from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Icon, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import CarouselComponent from '../Carousel';
import { workData, workData2 } from '../../Assets/workData';
import { VerticalCarouselDiv, HorizontalCarouselDiv, SmallCarouselDiv } from '../Styles/CarouselsStyles.js';
import MiniContactBox from '../MiniContactBox';

const WorkStyles = styled.div`
  .more-work {
    margin-top: -8px;
    border-bottom: 3px solid ${props => props.theme.orange};
    border-top: 3px solid ${props => props.theme.orange};
    background: rgba(7, 32, 51, 0.8);
    color: ${props => props.theme.offWhite};
    h1 {
      padding-top: 15px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    }
    i {
      font-size: 3rem;
    }
  }
`;

const Work = () => (
  <WorkStyles>
    <Grid centered>
      <Grid.Row>
        <Grid.Column computer={12} mobile={16}>
          <HorizontalCarouselDiv>
            <CarouselComponent carouselData={workData} interval={6000} />
          </HorizontalCarouselDiv>
        </Grid.Column>
        <Grid.Column computer={4} mobile={16} only="computer">
          <VerticalCarouselDiv>
            <CarouselComponent carouselData={workData2} interval={8000} />
          </VerticalCarouselDiv>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div className="more-work">
      <h1>Check out more of our work and see what we can do for you.</h1>
      <Icon name="chevron down" />
    </div>
    <Grid centered textAlign="center" stackable>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <h1>Bathrooms</h1>
            <CarouselComponent carouselData={workData} interval={null} />
          </SmallCarouselDiv>
        </Grid.Column>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <h1>Kitchens</h1>
            <CarouselComponent carouselData={workData} interval={null} />
          </SmallCarouselDiv>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <h1>Living Spaces</h1>
            <CarouselComponent carouselData={workData} interval={null} />
          </SmallCarouselDiv>
        </Grid.Column>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <h1>Detail Work</h1>
            <CarouselComponent carouselData={workData} interval={null} />
          </SmallCarouselDiv>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <MiniContactBox title="See how we can make your dream home come true." />
  </WorkStyles>
);

export default Work;
