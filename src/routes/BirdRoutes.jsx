import { Navigate, Route, Routes } from "react-router-dom";
import { BirdsPage } from "../pages/BirdsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { AboutUsPage } from "../pages/AboutUsPage";
import { useBirds } from "../hooks/useBirds";
import { Bird } from "../pages/Bird";

export const BirdRoutes = () => {
  const { initialBirds, initialBirdSelected, aboutUs } = useBirds();
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="pulmapedia" element={<BirdsPage />} />
        <Route
          path="pulmapedia/aboutus"
          element={<AboutUsPage aboutUs={aboutUs} />}
        />
        <Route
          path="pulmapedia/:id"
          element={
            <Bird
              birds={initialBirds}
              initialBirdSelected={initialBirdSelected}
            />
          }
        />
        <Route path="/" element={<Navigate to="/pulmapedia" />} />
      </Routes>
    </>
  );
};
