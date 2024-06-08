import { StyledNavBar } from "./styles";
import CartImg from "../../../assets/icons/cart.svg";
import UserImg from "../../../assets/icons/user.svg";
import WhiteLogo from "../../../assets/logos/whiteLogo.svg";
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <StyledNavBar>
      <img src={WhiteLogo} alt="frutamix logo" />
      <InputSearch />
      <div>
        <img src={CartImg} />
        <img src={UserImg} />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
