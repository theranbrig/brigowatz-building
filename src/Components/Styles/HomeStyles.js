import styled from 'styled-components';
import MainImage from '../../Assets/Home/Splash_Image.jpg';
import ColorMap from '../../Assets/Maps/WhiteMap.png';
import AboutImage from '../../Assets/Kitchens/camylla-battani-794111-unsplash.jpg';
import WorkImage from '../../Assets/Home/Tools_Image.jpg';

const HomeStyles = styled.div`
  .ui.segment {
    border-radius: 0 !important;
  }
  .preload-images {
    display: none;
    background: url(${MainImage}), url(${ColorMap}), url(${AboutImage}), url(${WorkImage});
  }
  /* Main Title Area */
  #title-splash {
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(rgba(22, 22, 22, 0.45), rgba(200, 200, 200, 0.25)), url(${MainImage});
    height: 600px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props => props.theme.offWhite};
    text-align: center;
    h2 {
      margin-top: 0;
      padding: 20px 0 0;
      font-family: 'Teko', sans-serif;
      font-weight: 300;
      font-size: 3rem;
      width: 60%;
      margin-left: 20%;
      border-top: 3px solid ${props => props.theme.orange};
      letter-spacing: 0.1rem;
      text-shadow: 2px 2px 10px #333;
      @media (max-width: 420px) {
        font-size: 2rem;
      }
    }
    h3 {
      font-weight: 300;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      text-shadow: 2px 2px 10px #333;
      @media (max-width: 420px) {
        font-size: 1.5rem;
        width: 90%;
        margin-left: 5%;
      }
    }
    img.main-white-logo {
      padding-top: 60px;
      margin: 0 auto;
      height: 300px;
      width: 200px;
      @media (max-width: 750px) {
        padding-top: 30px;
      }
    }

    i {
      margin-top: 30px;
      font-size: 4rem;
    }
    i:hover {
      text-shadow: 0px 3px 10px #333;
    }
  }
  /* Work and About Boxes */
  #info-boxes {
    h2 {
      text-transform: none;
      text-shadow: 2px 2px 10px #333;
      font-family: 'Teko', sans-serif;
      font-weight: 300;
      font-size: 4rem;
      margin-top: 40px;
      text-align: center;
      @media (max-width: 420px) {
        margin-top: 15px;
      }
    }
    p {
      letter-spacing: 0rem;
      text-transform: none;
      text-shadow: 2px 2px 10px #333;
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      width: 80%;
      margin-left: 10%;
    }
    .box-1 {
      float: left;
      background: linear-gradient(rgba(22, 22, 22, 0.45), rgba(200, 200, 200, 0.25)), url(${AboutImage});
      @media (max-width: 420px) {
        float: none;
      }
    }
    .box-2 {
      display: inline-block;
      background: linear-gradient(rgba(22, 22, 22, 0.45), rgba(200, 200, 200, 0.25)), url(${WorkImage});
    }
    .box-1,
    .box-2 {
      width: 50%;
      height: 300px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      color: ${props => props.theme.offWhite};
      border-top: 3px solid ${props => props.theme.orange};
      @media (max-width: 420px) {
        width: 100%;
      }
    }
  }
  div#quick-contact.wow.fadeIn {
    width: 100%;
    height: 400px;
    background: url(${ColorMap});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 3px solid ${props => props.theme.orange};
    float: left;
    @media (max-width: 768px) {
      height: 480px;
      padding-top: 5px;
    }
    @media (max-width: 450px) {
      height: 520px;
      padding-top: 5px;
    }
  }
`;

export default HomeStyles;
