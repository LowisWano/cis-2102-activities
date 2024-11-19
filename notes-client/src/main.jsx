import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/error-page.jsx";
import DashboardPage from './pages/dashboard/index.jsx';
import LoginPage from './pages/login/index.jsx';
import RegisterPage from './pages/register/index.jsx';
import ProtectedRoutes from './components/protected-routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ]
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
      router={router} 
    />
  </StrictMode>,
)
