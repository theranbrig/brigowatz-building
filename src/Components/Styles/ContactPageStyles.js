import styled from 'styled-components';
import WhiteMap from '../../Assets/Maps/WhiteMap.jpg';

const ContactPageStyles = styled.div`
  background: url(${WhiteMap});
  min-height: 650px;
  display: grid;
  grid-template-areas: 'info form';
  padding: 100px 155px;
  grid-gap: 20px;
  @media (max-width: 900px) {
    height: 1200px;
    grid-template-areas:
      'info'
      'form';
    padding: 80px 15px;
  }
  h2 {
    color: ${props => props.theme.orange};
  }

  div.contact-form {
    grid-area: form;
  }

  div.ui.inverted.segment.contact-info {
    height: 100%;
    grid-area: info;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr;
    justify-items: center;
    align-items: center;
    background: rgba(7, 32, 51, 0.8);
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

  textarea {
    height: 200px;
  }
  ul {
    display: block;
    padding: 0;
    border: none;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
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
