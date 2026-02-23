import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import MainLayout from "./layouts/MainLayout";
import SecondaryLayout from "./layouts/SecondaryLayout";
import Contact from "./pages/Contact/Contact";
import ReadingPage from "./pages/ReadingPage/ReadingPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route element={<SecondaryLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/readingPage" element={<ReadingPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
