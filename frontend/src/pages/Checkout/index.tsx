import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <h1>Tela de Checkout</h1>
      <Link to="/">
        <button>Ir para Home</button>
      </Link>
    </>
  );
};

export default Checkout;
