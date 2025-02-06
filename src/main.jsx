import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TipsProvider from "./contexts/TipsContext";
import TipsPageHeaderProvider from "./contexts/TipsPageHeaderContext";
import FormPageHeaderProvider from "./contexts/FormPageHeaderContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TipsProvider>
			<TipsPageHeaderProvider>
				<FormPageHeaderProvider>
					<App />
				</FormPageHeaderProvider>
			</TipsPageHeaderProvider>
		</TipsProvider>
	</StrictMode>,
);