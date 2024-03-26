import { Navigate, Route, Routes } from "react-router-dom";
import { BirdsPage } from "../pages/BirdsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { AboutUsPage } from "../pages/AboutUsPage";

export const BirdRoutes = () => {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="pulmapedia" element={<BirdsPage />} />
        <Route path="pulmapedia/aboutus" element={<AboutUsPage />} />
        <Route path="/" element={<Navigate to="/pulmapedia" />} />
      </Routes>
    </>
  );
};
