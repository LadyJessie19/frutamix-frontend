import { Outlet } from "react-router-dom";
import Menu from "./menu";
import NavBar from "./navbar";
import { MainOutlet } from "../style";

const BaseLayout = () => {
  return (
    <>
      <Menu />
      <NavBar />

      <MainOutlet>
        <Outlet />
      </MainOutlet>
    </>
  );
};

export default BaseLayout;
