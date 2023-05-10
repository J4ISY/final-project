import Contact from "../template/Contact.jsx";
import {Link} from "react-router-dom";
import openForm from "../helpers/OpenForm.js";

function LandingPage() {

    return (
        <>
            {/*Hero Section*/}
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h1 className="hero__title">Przywództwo w sporcie</h1>
                        <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                            aperiam consequatur cupiditate deserunt dolorum et eveniet ex expedita facere harum itaque
                            iure maiores minima natus necessitatibus nisi, non odio officia possimus quia quos repellat
                            reprehenderit sapiente soluta, tenetur voluptas voluptates!</p>
                    </div>
                </div>
            </div>

            {/*Main Section*/}
            <div className="overlay-contact-form">
                <Contact />
            </div>
            <main className="main">
                {/*Top section of main section*/}
                <div className="main-top">
                    <div className="main-top-content">
                        <h2 className="first">Przywództwo w sporcie</h2>
                        <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                            architecto cum dicta minima obcaecati odio saepe similique tempore.</p>
                        <div className="main-social-button">
                            <Link to='https://www.facebook.com/profile.php?id=100090405374356' className="main-social-links" target='_blank'>
                                <i className="fa-brands fa-square-facebook fa-2xl main-fb"></i>
                            </Link>
                            <Link to='https://www.instagram.com/trener_lider_w_sporcie/' className="main-social-links" target='_blank'>
                                <i className="fa-brands fa-instagram fa-2xl main-ig"></i>
                            </Link>
                            <button
                                className="main-contact-btn"
                                onClick={openForm}
                            >Kontakt
                            </button>
                        </div>
                    </div>
                </div>

                {/*Mid section of main section*/}

                <div className="main-mid">
                    <div className="main-mid-content">
                        <div className="main-offer main-column">
                            <div className="offer-img main-img"></div>
                            <Link to='/oferta' className="offer-link main-mid-link">Oferta</Link>
                        </div>

                        <div className="main-blog main-column">
                            <div className="blog-img main-img"></div>
                            <Link to='/blogs' className="blog-link main-mid-link">Blog</Link>
                        </div>

                        <div className="main-gallery main-column">
                            <div className="gallery-img main-img"></div>
                            <Link to='/galeria' className="gallery-link main-mid-link">Galeria</Link>
                        </div>
                    </div>
                </div>

                {/*Bottom section of main section*/}

                <div className="main-bottom">
                    <div className="main-bottom-content">
                        <div className="client-photo-container">
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
                        <img src="src/assets/images/imgUse/pogonlogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/imgUse/pogonakademialogo.png" alt="Logo of a club"
                             className="ref-photo"/>
                        <img src="src/assets/images/imgUse/balticalogo.png" alt="Logo of a club"
                             className="ref-photo baltica"/>
                        <img src="src/assets/images/imgUse/pzblogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/imgUse/bkslogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/imgUse/espadonlogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/imgUse/kusylogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/imgUse/olimpialogo.png" alt="Logo of a club" className="ref-photo"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;