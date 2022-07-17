import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CatchError from "./CatchError";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CatchError>
      <App />
    </CatchError>
  </StrictMode>
);
