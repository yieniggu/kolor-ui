import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminScreen } from "../components/admin/AdminScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { LandScreen } from "../components/land/LandScreen";
import { MarketplaceScreen } from "../components/marketplace/MarketplaceScreen";
import { Navbar } from "../components/UI/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/land/:id" element={<LandScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
