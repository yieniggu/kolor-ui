import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminScreen } from "../components/admin/AdminScreen";
import { LoginModal } from "../components/auth/LoginModal";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { LandScreen } from "../components/land/LandScreen";
import { MarketplaceScreen } from "../components/marketplace/MarketplaceScreen";
import { Navbar } from "../components/UI/Navbar";
import { AdminRoute } from "./AdminRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { role, uid } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Navbar />
      <LoginModal />
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminRoute role={role}>
              <AdminScreen />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute uid={uid}>
              <DashboardScreen />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<HomeScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/land/:id" element={<LandScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
