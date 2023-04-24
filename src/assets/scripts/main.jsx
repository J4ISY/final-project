import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './template/Header.jsx'
import Footer from "./template/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <Footer />
  </React.StrictMode>,
)
