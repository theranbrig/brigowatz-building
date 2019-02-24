import styled from 'styled-components';

const MiniDividerStyles = styled.div`
  #divider-box {
    text-align: center;
    color: ${props => props.theme.offWhite}
    height: 80px;
    display: grid;
    grid-template-columns: 6fr 1fr;
    align-items: center;
    background: rgba(7, 32, 51, 0.8);
    border-top: 3px solid ${props => props.theme.orange};
    padding: 0 50px;
    @media (max-width: 750px) {
      padding: 0 10px;
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
      align-items: right;
      margin-top: -5px ;
      &:hover {
        border-bottom: none;
      }
      @media (max-width: 750px) {
        margin-top: 0;
      }
    }
    button {
      width: 100% !important;
    }
  }
`;

export default MiniDividerStyles;
