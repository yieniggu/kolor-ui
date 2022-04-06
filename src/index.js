import React from "react";
import ReactDOM from "react-dom";
import { KolorApp } from "./App";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<KolorApp tab="home" />);