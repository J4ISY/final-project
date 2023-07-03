import Contact from "../../template/Contact.jsx";
import {Link} from "react-router-dom";
import openForm from "../../helpers/OpenForm.js";
import React from "react";

function OfferPrem() {
    return (
        <>
            <div className="single-offer">

                <div className="overlay-contact-form">
                    <Contact />
                </div>

                <div className="title-wrapper">
                    <h2 className="single-title">PROGRAM MENTORINGOWY PREMIUM</h2>
                    <Link to='/oferta' className="single-back">
                        <i className="arrow left"></i>
                        <i className="arrow left"></i>
                    </Link>
                </div>
                <div className="single-wrapper">
                    <div className="single-photo-offer">
                        <img src="/src/assets/images/imgUse/maja-marciniak/image5.jpeg"
                             alt="Zdjęcie najlepszego trenera mentalnego w Polsce" className="single-img"/>
                    </div>
                    <div className="single-content">
                        <p className="single-short">Jest to oferta skierowana do trenerów pracujących z zespołami seniorskimi. Oferuję swoje
                            wsparcie i doradztwo w zakresie psychologii sportu, prowadzenia drużyny, przygotowania do
                            rozgrywek, meczów i rozwiązywania bieżących problemów.</p>
                        <p className="single-kon">W ramach programu otrzymujesz :</p>
                        <div className="cost">
                            <ul className="cost-wrapper">
                                <li className="cost-el">1 indywidualna sesja mentorska w miesiącu (ok. 1,5h)</li>
                                <li className="cost-el">2 konsultacje telefoniczne w tygodniu (do 30minut każda)</li>
                                <li className="cost-el">Nieograniczona możliwość zadawania pytań przez maila, WhatsApp.</li>
                            </ul>
                        </div>
                        <p className="single-kon">Udział w programie mentoringowym może trwać – 3, 6 lub 12 miesięcy. Cena ustalana jest
                            indywidualnie. Jeśli jesteś zainteresowany ofertą – napisz wiadomość.</p>
                        <p className="single-ps">Zdecydowany/a? Skontaktuj się ze mną!</p><button className="offer-contact-btn" onClick={openForm}>Kontakt</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfferPrem;