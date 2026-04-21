import "./index.css";

import App from "./App";
import WebComponents from "./pages/WebComponents/WebComponents";
import TextPage from "./pages/TextPage/TextPage";
import TablePage from "./pages/TablePage/TablePage";
import FormPage from "./pages/FormPages/FormPage";
import TabsLinkPage from "./pages/TabsLinkPage/TabsLinkPage";
import TabsButtonPage from "./pages/TabsButtonPage/TabsButtonPage";
import About from "./pages/About/About";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import TextSubpage from "./pages/TextSubpage/TextSubpage";
import StepperPage from "./pages/StepperPage/StepperPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import MainLayout from "./MainLayout";
import NotFound from "./pages/NotFoundPage/NotFound";
import AgGridPage from "./pages/AgGridPage/AgGridPage";
import { defineCustomElements } from "@scania/tegel-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import TanstackPage from "./pages/TanstackPage/TanstackPage";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	type RouteObject,
} from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

export const mainRoutes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <WebComponents />,
			},
			{
				path: "web-components",
				element: <WebComponents />,
			},
			{
				path: "table",
				element: <TablePage />,
			},
			{
				path: "tanstack",
				element: <TanstackPage />,
			},
			{
				path: "ag-grid",
				element: <AgGridPage />,
			},
			{
				path: "form",
				element: <FormPage />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "stepper",
				element: <StepperPage />,
			},
			{
				path: "tabs-buttons",
				element: <TabsButtonPage />,
			},
			{
				path: "tabs-buttons",
				element: <TabsButtonPage />,
			},
			{
				path: "tabs-links",
				element: <TabsLinkPage />,
				children: [
					{
						path: "first-tab",
						element: <TabsLinkPage />,
					},
					{
						path: "second-tab",
						element: <TabsLinkPage />,
					},
					{
						path: "third-tab",
						element: <TabsLinkPage />,
					},
				],
			},
			{
				path: "text",
				element: <TextPage />,
			},
			{
				path: "text/subpage-with-a-very-long-title",
				element: <TextSubpage />,
			},
			{
				path: "settings",
				element: <SettingsPage />,
			},
			{
				path: "notifications",
				element: <NotificationPage />,
			},
		],
	},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />, // Use Outlet here to render nested routes
		children: [
			...mainRoutes,
			{
				path: "*",
				element: (
					<MainLayout
						shouldRenderBreadcrumbs={false}
						shouldRenderModeSwitcher={false}
					>
						<NotFound />
					</MainLayout>
				),
			},
		],
	},
]);
defineCustomElements();
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
