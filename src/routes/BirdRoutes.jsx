import { Navigate, Route, Routes } from "react-router-dom";
import { BirdsPage } from "../pages/BirdsPage";
import { Navbar } from "../components/layout/Navbar";

export const BirdRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="pulmapedia" element={<BirdsPage />} />
        <Route path="/" element={<Navigate to="/pulmapedia" />} />
      </Routes>
    </>
  );
};
