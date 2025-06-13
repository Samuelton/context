import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${Colors.SNOW};
  color: ${Colors.DARK_VOID};
  height: 40px;

  &::placeholder {
    color: ${Colors.DUSTY_GREY};
  }
`;
