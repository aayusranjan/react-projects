import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
// (<> </>) usin it to avoid to double call api
