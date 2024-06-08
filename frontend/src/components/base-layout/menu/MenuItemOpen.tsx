import { MenuItem } from "./styles";

import HomeImg from "../../../assets/icons/home.svg";
import ProductsImg from "../../../assets/icons/bag.svg";
import CheckoutImg from "../../../assets/icons/cart.svg";
import LogoutImg from "../../../assets/icons/logout.svg";

const MenuItemOpen = () => {
  return (
    <>
      <MenuItem href="/">
        <img src={HomeImg} /> Home
      </MenuItem>
      <MenuItem href="/products">
        <img src={ProductsImg} /> Produtos
      </MenuItem>
      <MenuItem href="/checkout">
        <img src={CheckoutImg} /> Carrinho
      </MenuItem>
      <MenuItem href="/login">
        <img src={LogoutImg} /> Sair
      </MenuItem>
    </>
  );
};

export default MenuItemOpen;
