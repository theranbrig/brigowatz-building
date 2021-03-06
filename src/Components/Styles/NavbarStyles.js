import styled from 'styled-components';

export const MobileNavDiv = styled.div`
  .mobile-nav {
    height: 80px;
    border-bottom: 3px solid ${props => props.theme.orange};
  }
  .ui.segment {
    border: none;
    border-radius: 0px !important;
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
  margin: 0 auto;
  width: 100%;
  font-family: 'Teko', sans-serif;
  border-bottom: 3px solid ${props => props.theme.orange};
  @media (max-width: 950px) {
    display: none;
  }
  ul {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    padding: 0 200px;
    border-bottom: 3px solid ${props => props.theme.orange};
  }
  img.desktop-menu-image {
    width: 80px;
    height: 100px;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    color: ${props => props.theme.black};
    height: 30px;
    letter-spacing: 0.15rem;
  }
  .active-nav-link a {
    color: ${props => props.theme.orange};
  }
`;
