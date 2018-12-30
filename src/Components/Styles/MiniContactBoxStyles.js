import styled from 'styled-components';

const MiniDividerStyles = styled.div`
  #divider-box {
    text-align: center;
    color: ${props => props.theme.offWhite}
    height: 80px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    background: rgba(7, 32, 51, 0.8);
    border-top: 3px solid ${props => props.theme.orange};
    @media (max-width: 750px) {
        padding-top: 10px;
      }
    h4 {
      text-shadow: 2px 2px 10px #333;
      font-size: 1.5rem;
      float: left;
      margin-left: 10%;
      font-weight: 300;
      @media (max-width: 750px) {
        margin-left: 3%;
        text-align: left;
        font-size: 1.2rem;
      }
    }
    a.contact-button {
      margin-top: 0 !important;
      padding-right: 10%;
      &:hover {
        border-bottom: none;
      }
      @media (max-width: 750px) {
        padding-right: 3%;
      }
    }
  }
`;

export default MiniDividerStyles;
