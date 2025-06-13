import { useContext, useState } from "react";
import { FormContainer, Form } from "./styled";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

export const FormRegister = () => {
  const { user, register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (name && email && password) {
      const userRegister = register(name, email, password);

      if (userRegister && user) {
        navigate("/login");
      }
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleRegister}>
        <InputComponent
          placeholder="Nome Sobrenome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputComponent
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputComponent
          placeholder="Senha"
          type="password"
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonComponent variant type="submit" title="Cadastrar" />
      </Form>
    </FormContainer>
  );
};
