import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./routes/root";
import HomePage from "./components/HomePage"
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import CommentDetails from "./components/CommentDetails";
import ErrorPage from "./error-page";

import './index.css';
import SingleUser from './components/SingleUser';

const router = createBrowserRouter([
  {path: '/',
   Component: Root, 
   children: [
    {
      path:'/',
      Component: HomePage
    },
    {
      path:'/users',
      Component: Users
    },
    {
      path: 'users/user-details',
      Component: SingleUser
    },
    {
      path:'/posts',
      Component: Posts
    },
    {
      path:'/comments',
     Component: Comments
    },
    {
      path: '/comments/:id',
      Component: CommentDetails
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

