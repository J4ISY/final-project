import Contact from "../template/Contact.jsx";
import {Link} from "react-router-dom";
import { useState } from "react";
import openForm from "../helpers/OpenForm.js";
import Header from '../template/Header.jsx'
import Footer from '../template/Footer.jsx'

function LandingPage() {

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
      };

    return (
        <>
        <Header />
            {/*Hero Section*/}
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h1 className="hero__title">Przywództwo w sporcie</h1>
                        <p 
                        className="hero__text"
                        ><p>Jeśli jesteś trenerem, prowadzisz ludzi z punktu A do punktu B, </p>
                        <p>podejmujesz decyzje, motywujesz, pomagasz zawodnikom rozwijać się i osiągać cele, </p>
                        <p>wyciągasz wnioski i oceniasz postępy – to mówim tutaj o PRZYWÓDZTWIE.</p>
                        </p>
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
                        <p className="main-text"><strong style={{ fontWeight: 900, color: '#DAB86C' }}>PRZYWÓDZTWO</strong> moim zdaniem, to nie jest cel do którego zmierzasz, czy miejsce jakie zajmujesz. To
droga, którą decydujesz się iść, albo sposób, w jaki zamierzasz podróżować przez życie”.</p>
                        <div className="main-social-button">
                            <Link to='https://www.facebook.com/profile.php?id=100090405374356' className="main-social-links" target='_blank'>
                                <i className="fa-brands fa-square-facebook fa-2xl main-fb"></i>
                            </Link>
                            <Link to='https://www.instagram.com/trener_lider_w_sporcie/' className="main-social-links" target='_blank'>
                                <i className="fa-brands fa-instagram fa-2xl main-ig"></i>
                            </Link>
                            <button className="main-contact-btn" onClick={openForm}>Kontakt</button>
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

                        {/* <div className="main-blog main-column">
                            <div className="blog-img main-img"></div>
                            <Link to='/blogs' className="blog-link main-mid-link">Blog</Link>
                        </div> */}

                        <div className="main-gallery main-column">
                            <div className="gallery-img main-img"></div>
                            <Link to='/blogs' className="gallery-link main-mid-link">Blog</Link>
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
                            <p className="bottom-text">
                                    <p style={{ margin: 0, marginBottom: '10px' }}>Nazywam się Maja Marciniak. Od dziesięcu lat jako trener mentalny wspieram zawodników, drużyny i
                                    trenerów w sporcie profesjonalnym.</p>
                                    <p style={{ margin: 0, marginBottom: '10px' }}>
                                    Na moje doświadczenie składa się praca w sztabach szkoleniowych drużyn ekstraklasy, drużyn
                                    pierwszo i drugoligowych, a także praca w kadrze olimpijskiej. Byłam odpowiedzialna za wspieranie
                                    trenerów i drużyn podczas walki o puchar polski, mistrzostwa polski, mistrzostwa europy i puchary
                                    europejskie. Kilkuletnie doświadczenie z backstage’u pracy zespołów osiągających wyniki medalowe
                                    jest moim najcenniejszych zasobem.
                                    </p>
                                    <div 
                                    style={{ display: isVisible ? 'block' : 'none' }}
                                    className="bottom-text-extend">
                                        <p style={{ margin: 0, marginBottom: '10px' }}>
                                        Tysiące godzin spędzonych w gabinecie i podczas startów zawodników sportów indywidualnych –
                                        takich jak squash, tenis, jazda konna, pływanie, taniec, boks, brazylijskie jiu jitsu, karate. Miałam
                                        przyjemność przygotowywać kilku profesjonalnych zawodników MMA do startu w największych
                                        galach w Polsce – KSW,FFN czy FAME MMA.
                                        </p>
                                        <p style={{ margin: 0, marginBottom: '10px' }}>
                                        Od kilku lat skupiam się głównie na pracy z trenerami w Akademii Piłkarskiej Pogoń Szczecin.
                                        Edukuję i pomagam im rozwijać kompetencje psychologiczne by skutecznie i w zgodzie ze sobą
                                        prowadzili zespoły do zwycięstwa. Realizuję także sesje indywidualne, warsztaty i szkolenia z zakresu
                                        psychologii przywództwa w sporcie.
                                        </p>
                                    </div>
                                        <span 
                                        onClick={handleButtonClick}
                                        className="read-extend"
                                        >{isVisible ? 'Pokaż mniej' : 'Pokaż więcej'}</span>                      
                                    </p>
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
                        <img src="src/assets/images/pogonakademialogo.png" alt="Logo of a club"
                             className="ref-photo"/>
                        <img src="src/assets/images/balticalogo.png" alt="Logo of a club"
                             className="ref-photo baltica"/>
                        <img src="src/assets/images/pzblogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/bkslogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/espadonlogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/kusylogo.png" alt="Logo of a club" className="ref-photo"/>
                        <img src="src/assets/images/olimpialogo.png" alt="Logo of a club" className="ref-photo"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;