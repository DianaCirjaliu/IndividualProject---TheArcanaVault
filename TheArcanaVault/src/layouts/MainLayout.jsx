import { Outlet } from "react-router-dom";
import VantaComponent from "../components/VantaComponent/VantaComponent";
import MainCard from "../components/MainCard/MainCard";

function MainLayout() {
  return (
    <div>
      <VantaComponent />
      <MainCard>
        <Outlet />
      </MainCard>
    </div>
  );
}

export default MainLayout;
