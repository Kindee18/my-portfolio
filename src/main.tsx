/**
 * File: src/main.tsx
 * Description: App entrypoint and root rendering.
 * Author: Kindee18
 * Date: 2025-10-28
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
