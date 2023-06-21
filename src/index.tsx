import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./register-webcomponents";

import App from "./App";
import WebComponents from "./pages/WebComponents";
import FormPage from "./pages/FormPage";
import TabsPage from "./pages/TabsPage";
import TabsLinkPage from "./pages/TabsLinkPage";
import TextPage from "./pages/TextPage/TextPage";
import TablePage from './pages/TablePage';


const router = createBrowserRouter([
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
        path: "form",
        element: <FormPage />,
      },
      {
        path: "tabs",
        element: <TabsPage />,
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
        path: "text-page",
        element: <TextPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
