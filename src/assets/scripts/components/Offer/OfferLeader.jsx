import React, {useState} from 'react';
import Contact from "../../template/Contact.jsx";
import {Link} from "react-router-dom";
import openForm from "../../helpers/OpenForm.js";
import leadership from "/src/assets/pdf/leadership.pdf";

function OfferLeader() {

    return (
        <>
            <div className="single-offer">

                <div className="overlay-contact-form">
                    <Contact />
                </div>

                <div className="title-wrapper">
                    <h2 className="single-title">Leadership Coaching</h2>
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
                        <p className="single-short short-gap">Zapraszam Cię do procesu coachingowego, podczas którego rozwiniesz i wzbogacisz swój styl
                            trenerski. Jest to oferta skierowana do trenerów, którzy chcą świadomie i skutecznie prowadzić
                            swoje zespoły, realizować cele sportowe – wykorzystując maksymalnie własny potencjał. To
                            ścieżka, która rozbudza i umacnia cechy przywódcze, pozwala czerpać satysfakcję z zarządzania
                            ludźmi.</p>
                        <p className="single-short short-gap">Podczas 8 indywidualnych sesji coachingowych skupimy się na Twoich mocnych stronach, abyś
                            bardzo świadomie wykorzystywał własny, niepowtarzalny styl przywódczy do realizowania celów.
                            Przez te kilka tygodni będziesz miał możliwość przyjrzeć się sobie, odkryć to co jeszcze nie
                            odkryte i poczuć moc jaka płynie z bycia świadomym liderem.</p>
                        <p className="single-short short-gap">W tym procesie skupiamy się na takich obszarach jak : styl przywódczy, filozofia trenerska, styl
                            komunikacji, wewnętrzna motywacja, cele i marzenia oraz zarządzanie zespołem. Szczegółowy
                            opis procesu możesz zobaczyć <a href='/src/assets/pdf/leadership.pdf' target='_blank'>tutaj</a></p>
                        {/*<p className="single-kon">Konsultacje odbywają się online lub telefonicznie, w zależności od*/}
                        {/*    potrzeby możesz wybrać*/}
                        {/*    spośród dwóch wariantów :</p>*/}
                        <div className="cost">
                            <ul className="cost-wrapper">
                                <li className="cost-el">Inwestycja za cały proces : <span
                                    style={{fontWeight: 900}}>4.000zł</span></li>
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

export default OfferLeader;