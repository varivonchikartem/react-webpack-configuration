import { createRoot } from "react-dom/client";

import "@/app/styles/index.scss";
import App from "./app/App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container root not found");
}

const root = createRoot(container);

root.render(<App />);
