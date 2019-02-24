import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import CarouselComponent from '../Carousel';
import {
  workPageTopHoriz,
  workPageTopVert,
  bathroomWork,
  livingSpacesWork,
  kitchenWork,
  bedroomWork,
} from '../../Assets/workData';
import { VerticalCarouselDiv, HorizontalCarouselDiv, SmallCarouselDiv } from '../Styles/CarouselsStyles.js';
import MiniContactBox from '../MiniContactBox';
import WorkPageStyles from '../Styles/WorkPageStyles';

const Work = () => (
  <WorkPageStyles>
    <div className="slideshows">
      <div className="horizontal-slideshow">
        <CarouselComponent carouselData={workPageTopHoriz} interval={6000} />
      </div>
      <div className="vertical-slideshow">
        <VerticalCarouselDiv>
          <CarouselComponent carouselData={workPageTopVert} interval={8000} />
        </VerticalCarouselDiv>
      </div>
    </div>
    <div className="more-work">
      <h1>Check out more of our work and see what we can do for you.</h1>
      <Icon name="chevron down" />
    </div>
    <Grid centered textAlign="center" stackable>
      <Grid.Row id="bottom-carousels">
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <div id="bathrooms">
              <h1>Bathrooms</h1>
              <CarouselComponent carouselData={bathroomWork} interval={null} />
            </div>
          </SmallCarouselDiv>
        </Grid.Column>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <div id="kitchens">
              <h1>Kitchens</h1>
              <CarouselComponent carouselData={kitchenWork} interval={null} />
            </div>
          </SmallCarouselDiv>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <div id="living-spaces">
              <h1>Living Spaces</h1>
              <CarouselComponent carouselData={livingSpacesWork} interval={null} />
            </div>
          </SmallCarouselDiv>
        </Grid.Column>
        <Grid.Column width={8}>
          <SmallCarouselDiv>
            <div id="bedrooms">
              <h1>Bedrooms</h1>
              <CarouselComponent carouselData={bedroomWork} interval={null} />
            </div>
          </SmallCarouselDiv>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <MiniContactBox title="See how we can make your dream home come true." />
  </WorkPageStyles>
);

export default Work;
