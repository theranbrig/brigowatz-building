import styled from 'styled-components';

const FooterStyles = styled.div`
  position: relative
  width: 100%;
  font-family: 'Roboto', sans-serif;
  img {
    width: 100px;
    height: 100px;
  }
  ul {
    display: inline-block;
    position: absolute;
    padding: 0;
    margin-bottom: 0;
  }
  li {
    display: inline-block;
    padding: 10px;
    a {
      color: ${props => props.theme.black};
      &:hover {
        color: ${props => props.theme.orange}
      }
    }
  }
  .bottom-info {
    display: inline-block;
    p {
      position: absolute;
      padding-left: 10px;
      top: 50px;
    }
  }
  .theran-link {
    position: absolute;
    right: 10px;
    bottom: 10px;
    a {
      color: ${props => props.theme.orange}
    }
  }
`;

export default FooterStyles;
