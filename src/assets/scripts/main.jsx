import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, BrowserRouter} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import OfferAll from "./components/Offer/OfferAll.jsx";
// import BlogSingle from "./components/BlogSingle.jsx";
import Error from "./components/Error.jsx";
import BlogAll from "./components/BlogAll.jsx";
import OfferInd from "./components/Offer/OfferInd.jsx";
import OfferLeader from "./components/Offer/OfferLeader.jsx";
import OfferPrem from "./components/Offer/OfferPrem.jsx";
import DPWS from "./components/DPWS.jsx"

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
        element: <OfferInd />
    },
    {
        path: '/oferta/leadership-coaching',
        element: <OfferLeader />
    },
    {
        path: '/oferta/program-mentoringowy-premium',
        element: <OfferPrem />
    },
    {
        path: '/blogs',
        element: <BlogAll />
    },
    // {
    //     path: '/blogs/:postId',
    //     element: <BlogSingle />
    // },
    {
        path: '/blogs/DPWS',
        element: <DPWS />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
