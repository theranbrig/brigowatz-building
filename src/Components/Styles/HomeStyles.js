import styled from 'styled-components';
import MainImage from '../../Assets/Home/milan-popovic-532663-unsplash.jpg';
import ColorMap from '../../Assets/Maps/WhiteMap.png';
import AboutImage from '../../Assets/OtherRemodels/jason-briscoe-332508-unsplash.jpg';
import WorkImage from '../../Assets/Home/ricky-kharawala-308072-unsplash.jpg';

const HomeStyles = styled.div`
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
    border-bottom: 3px solid ${props => props.theme.orange};
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
    }
    h3 {
      font-size: 2rem;
      letter-spacing: 0.1rem;
    }
    img.main-white-logo {
      padding-top: 80px;
      margin: 0 auto;
    }

    i {
      margin-top: 30px;
      font-size: 4rem;
    }
    i:hover {
      text-shadow: 0px 3px 10px #333;
    }
  }
  #divider-box {
    text-align: center;
    color: ${props => props.theme.offWhite}
    height: 80px;
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    background: rgba(7, 32, 51, 0.8);
    h4 {
      font-size: 1.5rem;
      float: left;
      margin-left: 20%;
    }
    a.contact-button {
      margin-top: 0 !important;
      padding-right: 20%;
      &:hover {
        border-bottom: none;
      }
    }
  }
  /* Work and About Boxes */
  #info-boxes {
    h2 {
      text-transform: none;
      font-family: "Teko", sans-serif;
      font-weight: 300;
      font-size: 4rem;
      margin-top: 40px;
      text-shadow: 2px 2px 5px ${props => props.theme.black};
    }
    p {
      letter-spacing: 0rem;
      text-transform: none;
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      width: 80%;
      text-shadow: 2px 2px 5px ${props => props.theme.black};
      margin-left: 10%;
    }
    .box-1 {
      float: left;
      background: linear-gradient(rgba(22, 22, 22, 0.45), rgba(200, 200, 200, 0.25)), url(${AboutImage});

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
    }
  }
  #quick-contact {
    height: 382px;
    background: url(${ColorMap});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-bottom: 3px solid ${props => props.theme.orange};
    border-top: 3px solid ${props => props.theme.orange};
    @media (max-width: 450px) {
      height: 520px;
    }
    @media (max-width: 768px) {
      height: 400px;
    }
  }
`;

export default HomeStyles;
