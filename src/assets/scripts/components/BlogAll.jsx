import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from '../template/Header.jsx'
import Footer from "../template/Footer.jsx";

function BlogAll() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/articles')
            .then(resp => resp.json())
            .then(respData => setData(respData))
    });

    return (
        <>
            <Header />
            {/*<h1 style={{fontWeight: 500}}>Strona <span style={{fontWeight: 900}}>BLOG</span> w budowie..</h1>*/}

            <section className="blog-all">
                    <div className="blog-all-posts">
                        {/* {data && data.map(entry => {
                            return (
                                <> */}
                                    <div className="blog-all-single-post">
                                        <Link to='DPWS' className='blog-all-single-post-a'>
                                            <img src="./src/assets/images/przywodztwo-w-sporcie.jpg" className='blog-all-single-post-img'
                                                 alt="Blog post image"/>
                                        </Link>
                                        <div className="blog-all-post-content">
                                            <h3 className="blog-all-title">
                                                <Link className='blog-all-title-link' to='DPWS'>DLACZEGO PRZYWÓDZTWO W SPORCIE?</Link>
                                            </h3>
                                            <p className="blog-all-meta">Dodano: 05 maja 2023 | Autor: Maja Marciniak</p>
                                            <p className="blog-all-excerpt">Od prawie dziesięciu lat pracuję w sporcie. Towarzyszę zawodnikom, drużynom i trenerom
                                                                            w przygotowaniach do startów, meczów i imprez rangi mistrzowskiej a także olimpijskiej.
                                                                            Przez kilka lat funkcjonowałam jako członek sztabu szkoleniowego w roli trenera mentalnego..</p>
                                        </div>
                                    </div>
                                    {/* <div className="blog-all-single-post">
                                        <Link to={`/blogs/${entry.id}`} className='blog-all-single-post-a'>
                                            <img key={entry.id} src={entry.photo || null} className='blog-all-single-post-img'
                                                 alt="Blog post image"/>
                                        </Link>
                                        <div className="blog-all-post-content">
                                            <h3 className="blog-all-title"><Link className='blog-all-title-link'
                                                to={`/blogs/${entry.id}`}>{entry.title}</Link></h3>
                                            <p className="blog-all-meta">{entry.author}</p>
                                            <p className="blog-all-excerpt">{entry.shortDesc}</p>
                                        </div>
                                    </div> */}
                                {/* </>
                            )
                        })} */}
                </div>
            </section>
            <Footer />
        </>
    );
}
    export default BlogAll;