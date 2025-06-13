import { useContext, useState } from "react";
import { FormContainer, Form } from "./styled";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

export const FormLogin = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      const isLogin = login(email, password);

      if (isLogin) {
        navigate("/home");
      } else {
        alert("Email ou senha incorretos");
      }
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleLogin}>
        <InputComponent
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <InputComponent
          placeholder="Senha"
          type="password"
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <ButtonComponent variant title="Entrar" type="submit" />
      </Form>
    </FormContainer>
  );
};
