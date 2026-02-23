import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
