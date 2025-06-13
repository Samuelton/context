import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  min-width: 20%;

  button {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    min-width: 80%;
  }
`;
