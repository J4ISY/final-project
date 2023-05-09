import React from 'react';
import {Link} from "react-router-dom";
import Contact from "../template/Contact.jsx";

function OfferPage() {

    function openForm() {
        document.querySelector(".overlay-contact-form").style.display = "flex";
    }

    return (
        <>
            <div className="single-offer">

                <div className="overlay-contact-form">
                    <Contact />
                </div>

                <div className="title-wrapper">
                    <h2 className="single-title">Konsultacje indywidualne</h2>
                    <Link to='/oferta' className="single-back">
                        <i className="arrow left"></i>
                        <i className="arrow left"></i>
                    </Link>
                </div>
                <div className="single-wrapper">
                    <div className="single-photo-offer">
                        <img src="/src/assets/images/imgUse/offer-single.jpg"
                             alt="Zdjęcie najlepszego trenera mentalnego w Polsce" className="single-img"/>
                    </div>
                    <div className="single-content">
                        <p className="single-short">Oferuję swoje wsparcie, doradztwo i pomoc w rozwiązaniu konkretnego
                            problemu. Jeśli w swojej
                            pracy trenera napotkałeś na wyzwanie, potrzebujesz merytorycznej podpowiedzi z zakresu
                            psychologii, zarządzania zespołem – ta oferta jest dla Ciebie.</p>
                        <p className="single-kon">Konsultacje odbywają się online lub telefonicznie, w zależności od
                            potrzeby możesz wybrać
                            spośród dwóch wariantów :</p>
                        <div className="cost">
                            <ul className="cost-wrapper">
                                <li className="cost-el">Konsultacja do 30 minut – inwestycja <span
                                    style={{fontWeight: 900}}>250zł.</span></li>
                                <li className="cost-el">Konsultacja do 60 minut – inwestycja <span
                                    style={{fontWeight: 900}}>400zł.</span></li>
                            </ul>
                        </div>
                        {/*<p className="single-ps">Po wybraniu najlepszego wariantu i opłaceniu konsultacji otrzymasz kalendarz z możliwymi*/}
                        {/*    terminami do wyboru.</p>*/}
                        <p className="single-ps">Zdecydowany/a? Skontaktuj się ze mną!</p><button className="main-contact-btn" onClick={openForm}>Kontakt</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfferPage;