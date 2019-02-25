import styled from 'styled-components';
import MainImage from '../../Assets/Home/Splash_Image.jpg';
import WhiteMap from '../../Assets/Maps/WhiteMap.jpg';
import AboutImage from '../../Assets/Home/Home_Kitchen.jpg';
import WorkImage from '../../Assets/Home/Tools_Image.jpg';

const HomeStyles = styled.div`
  .preload-images {
    display: none;
    background: url(${MainImage}), url(${WhiteMap}), url(${AboutImage}), url(${WorkImage});
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
    display: grid;
    align-items: center;
    justify-items: center;
    h2 {
      margin-top: 0;
      padding: 20px 0 0;
      font-family: 'Teko', sans-serif;
      font-weight: 300;
      font-size: 3rem;
      width: 60%;
      border-top: 3px solid ${props => props.theme.orange};
      letter-spacing: 0.1rem;
      text-shadow: 2px 2px 10px #333;
      @media (max-width: 900px) {
        font-size: 2rem;
      }
    }
    h3 {
      font-weight: 300;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      text-shadow: 2px 2px 10px #333;
      @media (max-width: 900px) {
        font-size: 1.5rem;
        width: 90%;
        margin-left: 5%;
      }
    }
    img.main-white-logo {
      padding-top: 30px;
      margin: 0 auto;
      height: 300px;
      width: 200px;
      @media (max-width: 750px) {
        padding-top: 30px;
      }
    }

    i {
      margin-top: 10px;
      font-size: 3rem;
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
      text-align: center;
    }
    p {
      letter-spacing: 0rem;
      text-transform: none;
      text-shadow: 2px 2px 10px #333;
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
    }
    .box-1 {
      float: left;
      background: linear-gradient(rgba(22, 22, 22, 0.45), rgba(200, 200, 200, 0.25)), url(${AboutImage});
      @media (max-width: 769px) {
        float: none;
      }
    }
    .box-2 {
      display: inline-block;
      background: linear-gradient(rgba(22, 22, 22, 0.45), rgba(200, 200, 200, 0.25)), url(${WorkImage});
    }
    .box-1,
    .box-2 {
      display: grid;
      padding: 20px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr;
      justify-items: center;
      align-items: center;
      width: 50%;
      height: 300px;
      text-align: center;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      color: ${props => props.theme.offWhite};
      border-top: 3px solid ${props => props.theme.orange};
      @media (max-width: 769px) {
        width: 100%;
      }
    }
  }
  div#quick-contact.wow.fadeIn {
    width: 100%;
    height: 400px;
    background: url(${WhiteMap});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 3px solid ${props => props.theme.orange};
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    padding: 20px;
    @media (max-width: 768px) {
      height: 480px;
      padding: 30px 10px;
    }
  }
  #home-contact-form-area {
    padding: 10px;
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;

export default HomeStyles;
