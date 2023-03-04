import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import WorkNote from './pages/WorkNote';
import Comment from './pages/Comment';
import Sponsor from './pages/Sponsor';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      { index: '/main', element: <MainPage /> },
      { path: '/main', element: <MainPage /> },
      { path: '/note', element: <WorkNote /> },
      { path: '/comment', element: <Comment /> },
      { path: '/sponsor', element: <Sponsor /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
