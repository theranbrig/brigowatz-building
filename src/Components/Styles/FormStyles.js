import styled from 'styled-components';

const FormStyles = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  @media (max-width: 450px) {
    button {
      margin-top: 10px !important;
    }
    label {
      padding-top: 10px;
    }
  }
  div.ui.segment {
    padding: 20px;
    background: rgba(7, 32, 51, 0.8);
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
