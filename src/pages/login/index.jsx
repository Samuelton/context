import { LoginContainer, Title, LoginImage } from "./styled";
import { GlobalStyled } from "../../styles/global-styled";
import { FormLogin } from "../../components/form-login";
import LoginRafiki from "../../assets/Login-rafiki.svg";

export default function Login() {
  return (
    <LoginContainer>
      <GlobalStyled />
      <LoginImage src={LoginRafiki} alt="Login" />
      <Title>Login</Title>
      <FormLogin />
    </LoginContainer>
  );
}
