import {Link} from "react-router-dom";

function OfferPage() {
    return (
        <>
            <div className="offer-page">
                {/*<div className="offer-header">*/}
                {/*    /!*<img src="/src/assets/images/imgUse/offer-banner.jpg" alt="" className="offer-header-img"/>*!/*/}
                {/*    <div className="offer-header-img"></div>*/}
                {/*</div>*/}
                <div className="offer-wrapper">

                    <div className="offer-single offer-single-top">
                        <div className="single-img-left single-img">
                            <img src="/src/assets/images/imgUse/offer-conversation.jpg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-left img-img"/>
                        </div>
                        <div className="content-right content">
                            <h6 className="cat">Trening mentalny</h6>
                            <h3 className="offer-title">KONSUTLACJE INDYWIDUALNE</h3>
                            <p className="offer-short-desc">Oferuję swoje wsparcie, doradztwo i pomoc w rozwiązaniu
                                konkretnego problemu. Jeśli w swojej
                                pracy trenera napotkałeś na wyzwanie, potrzebujesz merytorycznej podpowiedzi z zakresu
                                psychologii, zarządzania zespołem – ta oferta jest dla Ciebie.</p>
                            <Link to='/' className="read-more">Czytaj dalej</Link>
                        </div>
                    </div>

                    <div className="offer-single">
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
                            <Link to='/' className="read-more">Czytaj dalej</Link>
                        </div>
                        <div className="single-img-right single-img">
                            <img src="/src/assets/images/imgUse/offer-conversation.jpg"
                                 alt="zdjęcie konsultacje indywidualne" className="img-right img-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfferPage;