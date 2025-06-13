import { ButtonContainer } from "./styled";

export const ButtonComponent = ({ title, variant, type, onClick }) => {
  return (
    <ButtonContainer as="button" type={type} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};
