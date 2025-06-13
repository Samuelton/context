import { GlobalStyled } from "../../styles/global-styled";
import { SplashContainer, SplashImage } from "./styled";
import SplashImageSvg from "../../assets/Hello-rafiki.svg";
import { ButtonComponent } from "../../components/button";
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <SplashContainer>
      <GlobalStyled />
      <SplashImage src={SplashImageSvg} alt="splash" />
      <ButtonComponent title="Entrar" variant onClick={handleLogin} />
      <ButtonComponent title="Cadastrar" onClick={handleRegister} />
    </SplashContainer>
  );
}
