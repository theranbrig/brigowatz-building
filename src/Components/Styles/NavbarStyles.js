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
    width: 60px;
    justify: right;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  button {
    margin-top: 10px;
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
  }
  img.desktop-menu-image {
    width: 100px !important;
    height: 100px;
  }
  a {
    margin: 35px 0 0;
    font-size: 2rem;
    text-transform: uppercase;
    color: #22293b;
    height: 30px;
    &:hover {
      border-bottom: 2px solid orange;
    }
    &:active {
      color: orange;
    }
  }
`;
