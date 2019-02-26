import styled from 'styled-components';

const MiniDividerStyles = styled.div`
  #divider-box {
    text-align: center;
    color: ${props => props.theme.offWhite}
    height: 80px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    background: rgba(7, 32, 51, 0.8);
    border-top: 3px solid ${props => props.theme.orange};
    padding: 0 150px;
    @media (max-width: 750px) {
      padding: 0 10px;
      grid-template-columns: 2fr 1fr;
    }
    h4 {
      text-shadow: 2px 2px 10px #333;
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0;
      text-align: left;
      @media (max-width: 750px) {
        margin-left: 3%;
        text-align: left;
        font-size: 1.2rem;
        padding-right: 15px;
      }
    }
    a.contact-button {
      font-family: 'Roboto', sans-serif !important;
      letter-spacing: 0.03rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      justify-items: center;
      color: ${props => props.theme.offWhite};
      font-size: 1rem;
      border-radius: 5px;
      border: 2px solid ${props => props.theme.orange};
      align-items: right;
      &:hover {
        background-color: ${props => props.theme.orange};
      }
      @media (max-width: 750px) {
        margin-top: 0;
      }
    }
    button {
      width: 100% !important;
    }
  }
  a {
    min-height: 40px !important;
  }
`;

export default MiniDividerStyles;
