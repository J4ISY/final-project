import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './template/Header.jsx'
import Footer from "./template/Footer.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import OfferAll from "./components/OfferAll.jsx";
import BlogPage from "./components/BlogPage.jsx";
import Error from "./components/Error.jsx";
import BlogAll from "./components/BlogAll.jsx";
import OfferPage from "./components/OfferPage.jsx";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error />
    },
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/oferta',
        element: <OfferAll />
    },
    {
        path: '/oferta/konsultacje-indywidualne',
        element: <OfferPage />
    },
    {
        path: '/blogs',
        element: <BlogAll />
    },
    {
        path: '/blogs/:id',
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
