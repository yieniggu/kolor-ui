import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AdminScreen } from "../components/admin/AdminScreen";
import { ContractsContext } from "../components/ContractsContext";
import { Navbar } from "../components/ui/Navbar";
import { getLibrary } from "../helpers/web3Getters";
import { useCreateContract, useGetLibrary } from "../hooks.js/contractsHooks";
import { createContract } from "../web3-utils/contractCreation";
import { MarketRoutes } from "./MarketRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const context = useWeb3React();
  //console.log("[1] context in app router: ", context);

  const { contract: kolorTokenContract, loading: loadingContract } =
    useCreateContract(
      context,
      "0x9414f981a5B5ef2bE455f2427E2166c35e8989fB",
      "abis/KolorToken.json"
    );

  return (
    //<p>{loadingLibrary ? "library ready" : "loading library"}</p>

    <ContractsContext.Provider value={[kolorTokenContract]}>
      <BrowserRouter>
        <Navbar />
        {/* Set private route for Admining nfts & tokens */}
        <Routes>
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminScreen />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<MarketRoutes />} />
        </Routes>
      </BrowserRouter>
    </ContractsContext.Provider>
  );
};
