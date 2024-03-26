import { Navigate, Route, Routes } from "react-router-dom";
import { BirdsPage } from "../pages/BirdsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { AboutUsPage } from "../pages/AboutUsPage";
import { Bird } from "../pages/Bird";

export const BirdRoutes = () => {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="pulmapedia" element={<BirdsPage />} />
        <Route path="pulmapedia/aboutus" element={<AboutUsPage />} />
        <Route path="pulmapedia/:id" element={<Bird />} />
        <Route path="/" element={<Navigate to="/pulmapedia" />} />
      </Routes>
    </>
  );
};
