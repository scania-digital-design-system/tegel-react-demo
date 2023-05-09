import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import './register-webcomponents';

import App from './App';
import NativeComponents from "./pages/NativeComponents";
import WebComponents from "./pages/WebComponents";
import DemoPage from './pages/DemoPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "native-components",
        element: <NativeComponents />,
      },
      {
        path: "",
        element: <WebComponents />,
      },
      {
        path: "web-components",
        element: <WebComponents />,
      },
      {
        path: "demo-page",
        element: <DemoPage />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
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
