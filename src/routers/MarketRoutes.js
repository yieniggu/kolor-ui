import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../components/dashboard/Dashboard";
import { HomeScreen } from "../components/HomeScreen";
import { LandScreen } from "../components/marketplace/LandScreen";
import { MarketplaceScreen } from "../components/marketplace/MarketplaceScreen";

export const MarketRoutes = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketplace" element={<MarketplaceScreen />} />
          <Route path="land/:id" element={<LandScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
};
