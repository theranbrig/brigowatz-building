import styled from 'styled-components';

const FooterStyles = styled.div`
  border-top: 3px solid ${props => props.theme.orange};
  position: relative
  width: 100%;
  font-family: 'Roboto', sans-serif;
  height: 100px;
  background: white;
  img {
    width: 70px;
    height: 80px;
    margin: 5px;
    @media (max-width: 420px) {
        width: 50px;
        height: 50px;
        margin: 15px 10px 15px 0;
    }
  }
  ul {
    display: inline-block;
    position: absolute;
    padding: 0;
    margin-bottom: 0;
    @media (max-width: 420px) {
      margin: 5px 0;
    }
  }
  a {
    display: inline-block;
    padding: 10px 10px 10px 5px;
    color: ${props => props.theme.black};
    &:hover {
        color: ${props => props.theme.orange}
    }
    @media (max-width: 420px) {
      display: block;
      padding: 3px;
    }
  }
  .bottom-info {
    display: inline-block;
    p {
      position: absolute;
      padding-left: 10px;
      top: 50px;
      width: 65%;
      @media (max-width: 420px) {
        position: absolute;
        top: 5px;
        right: 3px;
        font-size: 0.8rem;
        text-align: justify;
      }
    }
  }
  .theran-link {
    position: absolute;
    right: 5px;
    bottom: 5px;
    a {
      padding: 0;
      color: ${props => props.theme.orange}
    }
    @media (max-width: 420px) {
      bottom: -20px;
    }
  }
`;

export default FooterStyles;
