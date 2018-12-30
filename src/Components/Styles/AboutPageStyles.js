import styled from 'styled-components';

const AboutPageStyles = styled.div`
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  h1 {
    font-family: 'Teko', sans-serif;
    font-weight: 300;
    font-size: 3rem;
  }
  h1,
  h2,
  li {
    color: ${props => props.theme.darkBlue};
  }
  p {
    font-size: 1.5rem;
  }
  ul {
    display: block;
    padding: 0;
    border: none;
  }
  li {
    display: inline-block;
    width: 25%;
    text-align: center;
    font-size: 1.8rem;
    padding: 20px 0;
  }
  #about-info {
    padding-bottom: 200px;
  }
  @media (max-width: 850px) {
    img.ui.medium.image {
      display: inline-block !important;
      width: 33% !important;
      margin: 0 !important;
    }
    li {
      width: 50%;
    }
    h2 {
      padding-top: 20px;
    }
    #about-info {
      padding-bottom: 50px;
    }
  }
`;

export default AboutPageStyles;
