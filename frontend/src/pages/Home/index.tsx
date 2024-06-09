import { Link } from "react-router-dom";
import { Container, StyledButton, StyledInput } from "./styles";
import LogoImg from "../../assets/logos/purpleLogo.svg";

function Home() {
  return (
    <>
      <Container>
        <img src={LogoImg} alt="Logo frutamix" />
        <div>
          <label htmlFor="login">
            Usuário:
            <StyledInput id="login" type="text" />
          </label>
          <label htmlFor="password">
            Senha:
            <StyledInput id="password" type="password" />
          </label>
        </div>
        <StyledButton as={Link} to="/products">
          Entrar
        </StyledButton>
      </Container>
    </>
  );
}

export default Home;
