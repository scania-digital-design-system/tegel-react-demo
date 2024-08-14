import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import WebComponents from './pages/WebComponents/WebComponents';
import TextPage from './pages/TextPage/TextPage';
import TablePage from './pages/TablePage';
import FormPage from './pages/FormPages/FormPage';
import TabsLinkPage from './pages/TabsLinkPage';
import TabsButtonPage from './pages/TabsButtonPage';
import About from './pages/About';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import TextSubpage from './pages/TextSubpage';
import StepperPage from './pages/StepperPage';
import NotificationPage from './pages/NotificationPage';
import MainLayout from './MainLayout';
import NotFound from './pages/NotFoundPage/NotFound';
import { defineCustomElements } from '@scania/tegel-react';
import TanstackColumnFilter from './pages/TanstackPage/column-search/TanstackColumnFilter';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <WebComponents />,
      },
      {
        path: 'web-components',
        element: <WebComponents />,
      },
      {
        path: 'table',
        element: <TablePage />,
      },
      {
        path: 'tanstack-filter',
        element: <TanstackColumnFilter />,
      },
      {
        path: 'form',
        element: <FormPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'stepper',
        element: <StepperPage />,
      },
      {
        path: 'tabs-buttons',
        element: <TabsButtonPage />,
      },
      {
        path: 'tabs-buttons',
        element: <TabsButtonPage />,
      },
      {
        path: 'tabs-links',
        element: <TabsLinkPage />,
        children: [
          {
            path: 'first-tab',
            element: <TabsLinkPage />,
          },
          {
            path: 'second-tab',
            element: <TabsLinkPage />,
          },
          {
            path: 'third-tab',
            element: <TabsLinkPage />,
          },
        ],
      },
      {
        path: 'text',
        element: <TextPage />,
      },
      {
        path: 'text/subpage-with-a-very-long-title',
        element: <TextSubpage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'notifications',
        element: <NotificationPage />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />, // Use Outlet here to render nested routes
    children: [
      ...mainRoutes,
      {
        path: '*',
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
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
