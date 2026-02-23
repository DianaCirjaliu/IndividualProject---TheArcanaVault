import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function SecondaryLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default SecondaryLayout;
