import { HomeContainer, HomeHeader, HomeHeaderContent } from "./styled";
import { GlobalStyled } from "../../styles/global-styled";
import { TbLogout } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <HomeContainer>
      <GlobalStyled />
      <HomeHeader>
        <h1>Login page</h1>
        <HomeHeaderContent>
          <span>
            Welcome to the login page <b>{user?.username}</b>
          </span>
          <button onClick={handleLogout}>
            <TbLogout />
          </button>
        </HomeHeaderContent>
      </HomeHeader>
      Homepage
    </HomeContainer>
  );
}
