import { Route, Routes } from "react-router-dom";
import { BirdRoutes } from "./routes/BirdRoutes";

export const MainApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<BirdRoutes />} />
    </Routes>
  );
};
