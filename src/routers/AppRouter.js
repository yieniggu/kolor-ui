import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { getAllNFTs } from "../actions/NFT";
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
  const { checking, role, uid } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return checking ? (
    <h3>checking...</h3>
  ) : (
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

        <Route 
          path="/"
        
        />

        <Route path="/" element={<HomeScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/lands/:id" element={<LandScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
