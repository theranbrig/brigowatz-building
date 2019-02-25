import styled from 'styled-components';

const WorkPageStyles = styled.div`
  .more-work {
    margin: 0 auto !important;
    display: grid;
    grid-template-rows: 2fr 1fr;
    justify-items: center;
    align-items: center;
    text-align: center;
    border-bottom: 3px solid ${props => props.theme.orange};
    border-top: 3px solid ${props => props.theme.orange};
    background: rgba(7, 32, 51, 0.8);
    color: ${props => props.theme.offWhite};
    padding: 0 10px;
    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 5px;
      @media (max-width: 450px) {
        font-size: 1.3rem;
        width: 90% !important;
      }
    }
    i {
      font-size: 3rem;
      margin: 0;
      @media (max-width: 450px) {
        font-size: 1.8rem;
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

  .slideshows {
    display: grid;
    grid-template-columns: 7fr 3fr;

    @media (max-width: 990px) {
      grid-template-columns: 1fr 0;
    }
  }
`;

export default WorkPageStyles;
