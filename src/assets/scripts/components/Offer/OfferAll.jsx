import {Link} from "react-router-dom";

function OfferAll() {
    return (
        <>
            <div className="offer-page">
                {/*<div className="offer-header">*/}
                {/*    /!*<img src="/src/assets/images/imgUse/offer-banner.jpg" alt="" className="offer-header-img"/>*!/*/}
                {/*    <div className="offer-header-img"></div>*/}
                {/*</div>*/}
                <div className="offer-page-wrapper">

                    <div className="offer-single-page offer-single-page-first">
                        <div className="single-img-page-left single-page-img">
                            <img src="/src/assets/images/image0bgc.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-left-page img-img-page"/>
                        </div>
                        <div className="content-right content-page">
                            <h6 className="cat-page">Trening mentalny</h6>
                            <h3 className="offer-title-page">KONSUTLACJE INDYWIDUALNE</h3>
                            <p className="offer-short-desc-page">Oferuję swoje wsparcie, doradztwo i pomoc w rozwiązaniu
                                konkretnego problemu. Jeśli w swojej
                                pracy trenera napotkałeś na wyzwanie, potrzebujesz merytorycznej podpowiedzi z zakresu
                                psychologii, zarządzania zespołem – ta oferta jest dla Ciebie.</p>
                            <div className="read-more-page">
                                <Link to='/oferta/konsultacje-indywidualne' className="read-more-page-btn">Czytaj dalej</Link>
                            </div>
                        </div>
                    </div>

                    <div className="offer-single-page offer-single-page-second">
                        <div className="single-img-page-right single-img-page">
                            <img src="/src/assets/images/image6.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right-page img-img-page"/>
                        </div>
                        <div className="content-left-page content-page">
                            <h6 className="cat-page">Trening mentalny</h6>
                            <h3 className="offer-title-page">LEADERSHIP COACHING – droga do świadomego przywództwa.</h3>
                            <p className="offer-short-desc-page">Zapraszam Cię do procesu coachingowego, podczas którego
                                rozwiniesz i wzbogacisz swój styl
                                trenerski. Jest to oferta skierowana do trenerów, którzy chcą świadomie i skutecznie
                                prowadzić
                                swoje zespoły, realizować cele sportowe – wykorzystując maksymalnie własny potencjał. To
                                ścieżka, która rozbudza i umacnia cechy przywódcze, pozwala czerpać satysfakcję z
                                zarządzania
                                ludźmi.</p>
                            <div className="read-more-page">
                                <Link to='/oferta/leadership-coaching' className="read-more-page-btn">Czytaj dalej</Link>
                            </div>
                        </div>
                        <div className="single-img-right single-img-page">
                            <img src="/src/assets/images/image6.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right-page img-img-page"/>
                        </div>
                    </div>

                    <div className="offer-single-page">
                        <div className="single-img-left-page single-img-page">
                            <img src="/src/assets/images/image8.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-left-page img-img-page"/>
                        </div>
                        <div className="content-right-page content-page">
                            <h6 className="cat-page">Trening mentalny</h6>
                            <h3 className="offer-title-page">PROGRAM MENTORINGOWY PREMIUM</h3>
                            <p className="offer-short-desc-page">Jest to oferta skierowana do trenerów pracujących z zespołami seniorskimi. Oferuję swoje
                                wsparcie i doradztwo w zakresie psychologii sportu, prowadzenia drużyny, przygotowania do
                                rozgrywek, meczów i rozwiązywania bieżących problemów.</p>
                            <div className="read-more-page">
                                <Link to='/oferta/program-mentoringowy-premium' className="read-more-page-btn">Czytaj dalej</Link>
                            </div>
                        </div>
                    </div>

                    <div className="offer-single-page offer-single-page-second">
                        <div className="single-img-right-page single-img-page">
                            <img src="/src/assets/images/image7.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right-page img-img-page"/>
                        </div>
                        <div className="content-left-page content-page">
                            <h6 className="cat-page">Online</h6>
                            <h3 className="offer-title-page">WARSZTATY, EBOOKI, SZKOLENIA</h3>
                            <p className="offer-short-desc-page">Już <span style={{fontWeight: 900}}>niedługo</span> pojawi się oferta umożliwiająca rozwijanie kompetencji miękkich. Pracujemy nad
                                materiałami wspierającymi pracę trenerów w zakresie : komunikacji, budowania motywacji w
                                zespole, zarządzania sytuacjami trudnymi, umiejętności udzielania informacji zwrotnej,
                                zarządzania sztabem, radzenia sobie ze stresem i presją oraz skuteczną mową ciała trenera.

                                Warsztaty i szkolenia będą prowadzone online, dzięki czemu każdy będzie mógł rozwijać się w
                                dogodnym dla siebie czasie i mieć swobodny dostęp do materiałów.</p>
                            <div className="read-more-page">
                                {/*<Link to='/' className="read-more-page-btn">Czytaj dalej</Link>*/}
                            </div>
                        </div>
                        <div className="single-img-right-page single-img-page">
                            <img src="/src/assets/images/image7.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right-page img-img-page"/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default OfferAll;