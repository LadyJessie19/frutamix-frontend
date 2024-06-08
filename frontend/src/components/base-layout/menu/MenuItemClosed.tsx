import { MenuItem } from "./styles";

import HomeImg from "../../../assets/icons/home.svg";
import ProductsImg from "../../../assets/icons/bag.svg";
import CheckoutImg from "../../../assets/icons/cart.svg";
import LogoutImg from "../../../assets/icons/logout.svg";

const MenuItemClosed = () => {
  return (
    <>
      <MenuItem href="/">
        <img src={HomeImg} />
      </MenuItem>
      <MenuItem href="/products">
        <img src={ProductsImg} />
      </MenuItem>
      <MenuItem href="/checkout">
        <img src={CheckoutImg} />
      </MenuItem>
      <MenuItem href="/login">
        <img src={LogoutImg} />
      </MenuItem>
    </>
  );
};

export default MenuItemClosed;
