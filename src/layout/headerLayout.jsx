import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const HeaderLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default HeaderLayout;
