import { RegisterContainer, Title, Subtitle, Img } from "./styled";
import { GlobalStyled } from "../../styles/global-styled";
import { FormRegister } from "../../components/form-register";
import MobileLoginPana from "../../assets/Mobile-login-pana.svg";

export default function Register() {
  return (
    <RegisterContainer>
      <GlobalStyled />
      <Img src={MobileLoginPana} alt="Login" />
      <Title>Cadastro</Title>
      <Subtitle>Crie sua conta</Subtitle>
      <FormRegister />
    </RegisterContainer>
  );
}
