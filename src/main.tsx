import "./index.css";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Providers from "./components/Providers.tsx";

import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
    <Analytics />
  </Providers>
);
