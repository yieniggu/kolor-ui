import React from "react";
import { Balances } from "./Balances";
import { Investments } from "./Investments";

// Show land tokens
// Show investments

export const DashboardScreen = () => {
  return (
    <div className="row mt-4 ms-2">
      <Investments />
      <Balances />
    </div>
  );
};
