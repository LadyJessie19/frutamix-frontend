import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Tela de Home</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
