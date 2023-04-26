function LandingPage() {
    return (
        <>
            {/*Hero Section*/}
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h1 className="hero__title">Zwycięzy zaczynają się w głowie</h1>
                        <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                            aperiam consequatur cupiditate deserunt dolorum et eveniet ex expedita facere harum itaque
                            iure maiores minima natus necessitatibus nisi, non odio officia possimus quia quos repellat
                            reprehenderit sapiente soluta, tenetur voluptas voluptates!</p>
                    </div>
                </div>
            </div>

            {/*Main Section*/}

            <main className="main">
                <div className="main__wrapper">

                    {/*Top section of main section*/}

                    <div className="main-top" id='main'>
                        <h2 className="first">Wygrywanie zaczyna się</h2>
                        <h2 className="second">w głowie!</h2>
                        <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                            architecto cum dicta minima obcaecati odio saepe similique tempore.</p>
                        <div className="main-social-button">
                            <a href="#" className="main-social-links">
                                <i className="fa-brands fa-square-facebook fa-2xl main-fb"></i>
                            </a>
                            <a href="#" className="main-social-links">
                                <i className="fa-brands fa-instagram fa-2xl main-ig"></i>
                            </a>
                            <a href="#main" className="main-contact-btn">Kontakt</a>
                        </div>
                    </div>

                    {/*Mid section of main section*/}

                    <div className="main-mid">
                        <div className="main-offer">
                            <img src="https://via.placeholder.com/350x350" alt="" className="offer-img"/>
                            <input type="button" value="" className="offer-button"/>
                        </div>
                        <div className="main-gallery">
                            <img src="https://via.placeholder.com/350x350" alt="" className="gallery-img"/>
                            <input type="button" value="" className="gallery-button"/>
                        </div>
                    </div>

                    {/*Bottom section of main section*/}

                    <div className="main-bottom">
                        <img src="https://via.placeholder.com/300x400" alt="" className="client-photo"/>
                        <h3 className="bottom-title"></h3>
                        <p className="bottom-text"></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LandingPage;