import {Link, useParams} from "react-router-dom";
import {blog} from "./BlogAll.jsx";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const BlogPage = ({ match }) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        if (match && match.params && match.params.id) {
            const id = parseInt(match.params.id);
            const foundPost = blog.find(post => post.id === id);
            if (foundPost) {
                setPost(foundPost);
            }
        }
    }, [match]);

    return (
        <>
            <article className="blog-single">
                <button className="blog-single-btn"><Link to="/blogs"><i className="arrow left"></i></Link></button>
                <div className="blog-wrapper">
                    <img src={post.photo} alt="" className="blog-single-img"/>
                    <div className="blog-single-content">
                        <h1 className="blog-single-title">{post.title}</h1>
                        <h5 className="blog-single-author">{post.author}</h5>
                        <p className="blog-single-text">{post.shortDesc}
                            {/*, Mimo że pandemia zmuszała nas do izolacji,*/}
                            {/*w*/}
                            {/*branży turystycznej cały czas widać trend podróżowania do miejsc odległych i odosobnionych.*/}
                            {/*Być*/}
                            {/*może podróżnym wcale nie chodzi o ucieczkę przed światem, a o zobaczenie czegoś, co jeszcze*/}
                            {/*nie*/}
                            {/*trafiło na Instagram? Takim miejscem na pewno jest szkocka bezludna wyspa Barlocco.*/}
                            {/*Na razie nikt tam jeszcze mieszka, ale to ma się niebawem zmienić. Wystarczy, że potencjalny*/}
                            {/*właściciel będzie dysponować budżetem w wysokości 150 tys. funtów, czyli około 782 tys. zł.*/}
                            {/*Nie każdy może sobie pozwolić na taki wydatek, ale biorąc pod uwagę ceny mieszkań w*/}
                            {/*europejskich*/}
                            {/*stolicach, w tym Warszawie, wyspiarska oferta kusi. Zwłaszcza, że nabywca będzie miał dla*/}
                            {/*siebie*/}
                            {/*nie kilkadziesiąt metrów kwadratowych, a ponad 10 hektarów.*/}

                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}

BlogPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default BlogPage