import { Outlet } from "react-router-dom";
import VantaComponent from "../components/VantaComponent/VantaComponent";

function MainLayout() {
  return (
    <div>
      <VantaComponent />
      <Outlet />
    </div>
  );
}

export default MainLayout;
