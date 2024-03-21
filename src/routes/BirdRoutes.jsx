import { Navigate, Route, Routes } from "react-router-dom";
import { BirdsPage } from "../pages/BirdsPage";

export const BirdRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="pulmapedia" element={<BirdsPage />} />
        <Route path="/" element={<Navigate to="/pulmapedia" />} />
      </Routes>
    </>
  );
};
