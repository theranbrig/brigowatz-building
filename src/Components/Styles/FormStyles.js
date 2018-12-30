import styled from 'styled-components';

const FormStyles = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  padding-top: 12px;
  @media (max-width: 450px) {
    width: 90%;
    margin-left: 5%;
    button {
      margin-top: 10px !important;
    }
    label {
      padding-top: 10px;
    }
  }
  .ui.segment {
    background: rgba(7, 32, 51, 0.8);
  }
  label {
    padding-bottom: 10px;
  }
  input,
  textarea {
    border: 1px solid ${props => props.theme.orange} !important;
    resize: none !important;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2rem;
  }
`;

export default FormStyles;
