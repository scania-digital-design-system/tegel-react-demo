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
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import TanstackPage from "./pages/TanstackPage/TanstackPage";
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
	type RouteObject,
} from "react-router";
import { StrictMode } from "react";
import AccordionExample from "./components/Accordion/Accordion";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Block from "./components/Block/Block";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import Chip from "./components/Chip/Chip";
import Datetime from "./components/Datetime/Datetime";
import Divider from "./components/Divider/Divider";
import Dropdown from "./components/Dropdown/Dropdown";
import Link from "./components/Link/Link";
import Message from "./components/Message/Message";
import ModalExample from "./components/Modal/ModalExample";
import PopoverCanvas, { PopoverMenu } from "./components/Popover/Popover";
import RadioButton from "./components/RadioButton/RadioButton";
import Spinner from "./components/Spinner/Spinner";
import StepperExample from "./components/Stepper/StepperExample";
import Tag from "./components/Tag/Tag";
import Tabs from "./components/Tabs/Tabs";
import TextField from "./components/TextField/TextField";
import Textarea from "./components/Textarea/Textarea";
import Toast from "./components/Toast/Toast";
import Toggle from "./components/Toggle/Toggle";
import Tooltip from "./components/Tooltip/Tooltip";
import { defineCustomElements } from "@scania/tegel-react";
import { createRoot } from "react-dom/client";

const mainRoutes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Navigate to="/about" />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "web-components",
				element: <WebComponents />,
				children: [
					{ index: true, element: <Navigate to="/web-components/accordion" /> },
					{ path: "accordion", element: <AccordionExample /> },
					{ path: "badge", element: <Badge /> },
					{ path: "banner", element: <Banner /> },
					{ path: "block", element: <Block /> },
					{ path: "breadcrumbs", element: <Breadcrumbs /> },
					{ path: "button", element: <Button /> },
					{ path: "card", element: <Card /> },
					{ path: "checkbox", element: <Checkbox /> },
					{ path: "chip", element: <Chip /> },
					{ path: "datetime", element: <Datetime /> },
					{ path: "divider", element: <Divider /> },
					{ path: "dropdown", element: <Dropdown /> },
					{ path: "link", element: <Link /> },
					{ path: "message", element: <Message /> },
					{ path: "modal", element: <ModalExample /> },
					{ path: "popover-canvas", element: <PopoverCanvas /> },
					{ path: "popover-menu", element: <PopoverMenu /> },
					{ path: "radio-button", element: <RadioButton /> },
					{ path: "spinner", element: <Spinner /> },
					{ path: "stepper", element: <StepperExample /> },
					{ path: "tag", element: <Tag /> },
					{ path: "tabs", element: <Tabs /> },
					{ path: "text-field", element: <TextField /> },
					{ path: "text-area", element: <Textarea /> },
					{ path: "toast", element: <Toast /> },
					{ path: "toggle", element: <Toggle /> },
					{ path: "tooltip", element: <Tooltip /> },
				],
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
					<MainLayout shouldRenderBreadcrumbs={false} shouldRenderModeSwitcher={false}>
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
