import styled from 'styled-components';

const WorkPageStyles = styled.div`
  .more-work {
    margin: 0 auto !important;
    text-align: center;
    margin-top: -8px;
    border-bottom: 3px solid ${props => props.theme.orange};
    border-top: 3px solid ${props => props.theme.orange};
    background: rgba(7, 32, 51, 0.8);
    color: ${props => props.theme.offWhite};
    h1 {
      padding-top: 15px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      @media (max-width: 450px) {
        font-size: 1.3rem;
        width: 90% !important;
        margin-left: 5%;
      }
    }
    i {
      font-size: 3rem;
      @media (max-width: 450px) {
        font-size: 1.3rem;
        margin-bottom: 10px;
      }
    }
  }
  div.ui.centered.grid {
    margin: 0 auto;
    padding: 0 !important;
  }
  div.row {
    padding: 0 !important;
  }
  div.ui.centered.stackable.center.aligned.grid {
    margin: 0 auto;
  }
`;

export default WorkPageStyles;
