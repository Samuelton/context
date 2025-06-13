import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.variant ? Colors.LIQUID_LAVA : Colors.STATE_GREY};
  color: ${Colors.SNOW};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 20%;
  font-size: 1rem;
  text-decoration: none;
  font-weight: ${(props) => (props.variant ? "bold" : "normal")};
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
