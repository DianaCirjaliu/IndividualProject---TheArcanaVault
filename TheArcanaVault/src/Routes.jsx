import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import MainLayout from "./layouts/MainLayout";
import SecondaryLayout from "./layouts/SecondaryLayout";
import Contact from "./pages/Contact/Contact";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import PredictionPage from "./pages/PredictionPage/PredictionPage";
import CardListPage from "./pages/CardListPage/CardListPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<SecondaryLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/readingPage" element={<ReadingPage />} />
            <Route path="/predictionPage" element={<PredictionPage />} />
            <Route path="/tarotDeck" element={<CardListPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
