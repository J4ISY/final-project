function LandingPage() {
    return (
        <>
            {/*Hero Section*/}
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h1 className="hero__title">Zwycięzcy zaczynają się w głowie</h1>
                        <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                            aperiam consequatur cupiditate deserunt dolorum et eveniet ex expedita facere harum itaque
                            iure maiores minima natus necessitatibus nisi, non odio officia possimus quia quos repellat
                            reprehenderit sapiente soluta, tenetur voluptas voluptates!</p>
                    </div>
                </div>
            </div>

            {/*Main Section*/}

            <main className="main">

                {/*Top section of main section*/}

                <div className="main-top">
                    <div className="main-top-content">
                        <h2 className="first">Przywództwo w sporcie</h2>
                        <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                            architecto cum dicta minima obcaecati odio saepe similique tempore.</p>
                        <div className="main-social-button">
                            <a href="#" className="main-social-links">
                                <i className="fa-brands fa-square-facebook fa-2xl main-fb"></i>
                            </a>
                            <a href="#" className="main-social-links">
                                <i className="fa-brands fa-instagram fa-2xl main-ig"></i>
                            </a>
                            <a href="#" className="main-contact-btn">Kontakt</a>
                        </div>
                    </div>
                </div>

                {/*Mid section of main section*/}

                <div className="main-mid">
                    <div className="main-mid-content">
                        <div className="main-offer main-column">
                            <div className="offer-img main-img"></div>
                            {/*<img src="https://via.placeholder.com/350x350" alt="" className="offer-img"/>*/}
                            <a href="#" className="offer-link main-mid-link">Oferta</a>
                        </div>

                        <div className="main-blog main-column">
                            <div className="blog-img main-img"></div>
                            {/*<img src="https://via.placeholder.com/350x350" alt="" className="blog-img"/>*/}
                            <a href="#" className="blog-link main-mid-link">Blog</a>
                        </div>

                        <div className="main-gallery main-column">
                            <div className="gallery-img main-img"></div>
                            {/*<img src="https://via.placeholder.com/350x350" alt="" className="gallery-img"/>*/}
                            <a href="#" className="gallery-link main-mid-link">Galeria</a>
                        </div>
                    </div>
                </div>

                {/*Bottom section of main section*/}

                <div className="main-bottom">
                    <div className="main-bottom-content">
                        <div className="client-photo-container">
                            {/*<img src="https://via.placeholder.com/500x500" alt="" className="client-photo"/>*/}
                            <div className="client-photo"></div>
                        </div>
                        <div className="bottom-description">
                            <h3 className="bottom-title">Kim jestem?</h3>
                            <p className="bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit
                                anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/*References section*/}

            <div className="ref">
                <div className="ref__wrapper">
                    <h5 className="ref-title">Skorzystali z mojego wsparcia:</h5>
                    <div className="ref-photos">
                        <img src="src/assets/images/pogonlogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/pogonakademialogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/balticalogo.png" alt="Logo of a club" className="ref-photo baltica"/>
                        <img src="src/assets/images/pzblogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/bkslogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/espadonlogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/kusylogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/olimpialogo.png" alt="Logo of a club" className="ref-photo"/>
                        {/*<img src="https://via.placeholder.com/150x150" alt="Logo of a club" className="ref-photo"/>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;