import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminScreen } from "../components/admin/AdminScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { LandScreen } from "../components/land/LandScreen";
import { Land } from "../components/marketplace/LandCard";
import { MarketplaceScreen } from "../components/marketplace/MarketplaceScreen";
import { NoProviderScreen } from "../components/NoProvider/NoProviderScreen";
import { Navbar } from "../components/UI/Navbar";
import { useInitMetamask } from "../hooks/web3Hooks";

export const AppRouter = () => {
  useInitMetamask();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/no-provider" element={<NoProviderScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/land/:id" element={<LandScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
