import {Link} from "react-router-dom";

function OfferAll() {
    return (
        <>
            <div className="offer-page">
                {/*<div className="offer-header">*/}
                {/*    /!*<img src="/src/assets/images/imgUse/offer-banner.jpg" alt="" className="offer-header-img"/>*!/*/}
                {/*    <div className="offer-header-img"></div>*/}
                {/*</div>*/}
                <div className="offer-wrapper">

                    <div className="offer-single offer-single-first">
                        <div className="single-img-left single-img">
                            <img src="/src/assets/images/imgUse/maja-marciniak/image0bgc.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-left img-img"/>
                        </div>
                        <div className="content-right content">
                            <h6 className="cat">Trening mentalny</h6>
                            <h3 className="offer-title">KONSUTLACJE INDYWIDUALNE</h3>
                            <p className="offer-short-desc">Oferuję swoje wsparcie, doradztwo i pomoc w rozwiązaniu
                                konkretnego problemu. Jeśli w swojej
                                pracy trenera napotkałeś na wyzwanie, potrzebujesz merytorycznej podpowiedzi z zakresu
                                psychologii, zarządzania zespołem – ta oferta jest dla Ciebie.</p>
                            <div className="read-more">
                                <Link to='/oferta/konsultacje-indywidualne' className="read-more-btn">Czytaj dalej</Link>
                            </div>
                        </div>
                    </div>

                    <div className="offer-single offer-single-second">
                        <div className="single-img-right single-img">
                            <img src="/src/assets/images/imgUse/maja-marciniak/image6.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right img-img"/>
                        </div>
                        <div className="content-left content">
                            <h6 className="cat">Trening mentalny</h6>
                            <h3 className="offer-title">LEADERSHIP COACHING – droga do świadomego przywództwa.</h3>
                            <p className="offer-short-desc">Zapraszam Cię do procesu coachingowego, podczas którego
                                rozwiniesz i wzbogacisz swój styl
                                trenerski. Jest to oferta skierowana do trenerów, którzy chcą świadomie i skutecznie
                                prowadzić
                                swoje zespoły, realizować cele sportowe – wykorzystując maksymalnie własny potencjał. To
                                ścieżka, która rozbudza i umacnia cechy przywódcze, pozwala czerpać satysfakcję z
                                zarządzania
                                ludźmi.</p>
                            <div className="read-more">
                                <Link to='/oferta/leadership-coaching' className="read-more-btn">Czytaj dalej</Link>
                            </div>
                        </div>
                        <div className="single-img-right single-img">
                            <img src="/src/assets/images/imgUse/maja-marciniak/image6.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right img-img"/>
                        </div>
                    </div>

                    <div className="offer-single">
                        <div className="single-img-left single-img">
                            <img src="/src/assets/images/imgUse/maja-marciniak/image8.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-left img-img"/>
                        </div>
                        <div className="content-right content">
                            <h6 className="cat">Trening mentalny</h6>
                            <h3 className="offer-title">PROGRAM MENTORINGOWY PREMIUM</h3>
                            <p className="offer-short-desc">Jest to oferta skierowana do trenerów pracujących z zespołami seniorskimi. Oferuję swoje
                                wsparcie i doradztwo w zakresie psychologii sportu, prowadzenia drużyny, przygotowania do
                                rozgrywek, meczów i rozwiązywania bieżących problemów.</p>
                            <div className="read-more">
                                <Link to='/oferta/program-mentoringowy-premium' className="read-more-btn">Czytaj dalej</Link>
                            </div>
                        </div>
                    </div>

                    <div className="offer-single offer-single-second">
                        <div className="single-img-right single-img">
                            <img src="/src/assets/images/imgUse/maja-marciniak/image8.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right img-img"/>
                        </div>
                        <div className="content-left content">
                            <h6 className="cat">Online</h6>
                            <h3 className="offer-title">WARSZTATY, EBOOKI, SZKOLENIA</h3>
                            <p className="offer-short-desc">Już <span style={{fontWeight: 900}}>niedługo</span> pojawi się oferta umożliwiająca rozwijanie kompetencji miękkich. Pracujemy nad
                                materiałami wspierającymi pracę trenerów w zakresie : komunikacji, budowania motywacji w
                                zespole, zarządzania sytuacjami trudnymi, umiejętności udzielania informacji zwrotnej,
                                zarządzania sztabem, radzenia sobie ze stresem i presją oraz skuteczną mową ciała trenera.

                                Warsztaty i szkolenia będą prowadzone online, dzięki czemu każdy będzie mógł rozwijać się w
                                dogodnym dla siebie czasie i mieć swobodny dostęp do materiałów.</p>
                            <div className="read-more">
                                {/*<Link to='/' className="read-more-btn">Czytaj dalej</Link>*/}
                            </div>
                        </div>
                        <div className="single-img-right single-img">
                            <img src="/src/assets/images/imgUse/maja-marciniak/image7.jpeg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right img-img"/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default OfferAll;