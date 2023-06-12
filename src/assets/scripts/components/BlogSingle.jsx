import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const BlogSingle = () => {

    const [data, setData] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/articles/${postId}`)
            .then(resp => resp.json())
            .then(respData => setData(respData))
    },[postId]);

    return (
        <>
            <article className="blog-single">
                <button className="blog-single-btn">
                    <Link to="/blogs"><i className="arrow left"></i></Link>
                </button>
                <div className="blog-wrapper">
                    {data && (
                            <>
                                <img src={data.photo} alt="" className="blog-single-img"/>
                                <div className="blog-single-content">
                                    <h1 className="blog-single-title">{data.title}</h1>
                                    <h5 className="blog-single-author">{data.author}</h5>
                                    <p className="blog-single-text">{data.longDesc}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </article>
        </>
    );
}

export default BlogSingle