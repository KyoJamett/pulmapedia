import { Navigate, Route, Routes } from "react-router-dom";
import { BirdsPage } from "../pages/BirdsPage";
import { Navigationbar } from "../components/layout/Navigationbar";

export const BirdRoutes = () => {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="pulmapedia" element={<BirdsPage />} />
        <Route path="/" element={<Navigate to="/pulmapedia" />} />
      </Routes>
    </>
  );
};
