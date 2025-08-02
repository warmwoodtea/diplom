import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routing } from "./setup";

import "./normalize.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
