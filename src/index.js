import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./routes/root";
import Users from "./components/Users";
import ErrorPage from "./error-page";

import './index.css';

const router = createBrowserRouter([
  {path: '/',
   Component: Root, 
   children: [
    {
      path:'/users',
      Component: Users
    }
   ],
   errorElement: <ErrorPage />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

