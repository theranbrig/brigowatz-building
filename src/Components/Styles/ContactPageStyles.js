import styled from 'styled-components';
import WhiteMap from '../../Assets/Maps/WhiteMap.jpg';

const ContactPageStyles = styled.div`
  background: url(${WhiteMap});
  min-height: 650px;
  margin-top: 15px;
  @media (max-width: 450px) {
    height: 1200px;
  }
  h2 {
    color: ${props => props.theme.orange};
  }
  div.ui.inverted.segment.contact-info {
    background: rgba(7, 32, 51, 0.8);
    margin-top: 12px !important;
    @media (max-width: 450px) {
      width: 90% !important;
      margin-left: 5%;
      height: 420px;
    }
    h2 {
      font-family: 'Roboto', sans-serif !important;
      font-weight: 300;
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.165rem;
    }
  }
  div.ui.inverted.segment {
    width: 100% !important;
    height: 525px;
    @media (max-width: 450px) {
      height: 650px;
    }
  }
  textarea {
    height: 200px;
  }
  ul {
    display: block;
    padding: 0;
    border: none;
    list-style-type: none;
  }
  li {
    width: 100%;
    padding: 20px 0;
  }
  a {
    color: white;
    font-family: 'Roboto', sans-serif !important;
    font-weight: 300;
    text-transform: none;
    &:hover {
      border: none;
      color: ${props => props.theme.orange};
    }
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }
  p {
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400;
    @media (max-width: 450px) {
      font-size: 0.9rem !important;
    }
  }
  i {
    color: ${props => props.theme.orange};
  }
`;

export default ContactPageStyles;
