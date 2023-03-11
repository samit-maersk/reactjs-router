import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from './pages/Error'
import App from './App'
import Todo from './pages/Todo';
import Home from './pages/Home';
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
);