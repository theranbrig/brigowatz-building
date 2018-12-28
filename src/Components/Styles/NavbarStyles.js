import styled from 'styled-components';

export const MobileNavDiv = styled.div`
  .mobile-nav {
    height: 80px;
  }
  @media (min-width: 950px) {
    display: none;
  }
  .mobile-menu-image {
    height: 60px;
    width: 50px;
    justify: right;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  button {
    margin-top: 10px;
  }
  a {
    font-family: 'Teko', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.black};
  }
  .active-nav-link {
    color: ${props => props.theme.orange};
  }
`;

export const DesktopNavDiv = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  font-family: 'Teko', sans-serif;

  @media (max-width: 950px) {
    display: none;
  }
  ul {
    margin: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 200px;
    border-bottom: 3px solid ${props => props.theme.orange};
  }
  img.desktop-menu-image {
    width: 80px;
    height: 100px;
  }
  a {
    margin: 38px 0 0;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${props => props.theme.black};
    height: 30px;
    letter-spacing: 0.15rem;
    &:hover {
      border-bottom: 2px solid ${props => props.theme.orange};
    }
  }
  .active-nav-link a {
    color: ${props => props.theme.orange};
  }
`;
