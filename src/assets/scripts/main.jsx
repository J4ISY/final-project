import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './template/Header.jsx'
import Footer from "./template/Footer.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import OfferPage from "./components/OfferPage.jsx";
import BlogPage from "./components/BlogPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/oferta',
        element: <OfferPage />
    },
    {
        path: '/blog',
        element: <BlogPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>,
)
