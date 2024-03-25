import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactRouterDOM from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <div>404</div>,
//     children: [
//       { index: true, element: <div>Home</div> },
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ReactRouterDOM.BrowserRouter>
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route path="/" element={<App />} />
      </ReactRouterDOM.Routes>
    </ReactRouterDOM.BrowserRouter>
  </React.StrictMode>
)
