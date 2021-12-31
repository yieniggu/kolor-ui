import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { MintScreen } from "../components/admin/MintScreen";
import { Navbar } from "../components/ui/Navbar";
import { MarketRoutes } from "./MarketRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Set private route for minting nfts & tokens */}
      <Routes>
        <Route
          path="/mint"
          element={
            <PrivateRoute>
              <MintScreen />
            </PrivateRoute>
          }
        />

        <Route path="/*" element={<MarketRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
