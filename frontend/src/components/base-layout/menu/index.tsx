import { useState } from "react";
import { Burger, StyledMenu } from "./styles";
import BurguerImg from "../../../assets/icons/burguer.svg";
import MenuItemOpen from "./MenuItemOpen";
import MenuItemClosed from "./MenuItemClosed";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Burger onClick={toggleMenu}>
        <img src={BurguerImg} alt="burger icon" />
      </Burger>
      <StyledMenu open={open}>
        {open ? <MenuItemOpen /> : <MenuItemClosed />}
      </StyledMenu>
    </>
  );
};

export default Menu;
