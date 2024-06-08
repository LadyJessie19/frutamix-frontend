import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Tela de Login</h1>
      <Link to="/">
        <button>Ir para Home</button>
      </Link>
    </>
  );
};

export default Login;
