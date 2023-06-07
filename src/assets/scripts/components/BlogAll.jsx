import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function BlogAll() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/articles')
            .then(resp => resp.json())
            .then(respData => setData(respData))
    });

    return (
        <>

            {/*<h1 style={{fontWeight: 500}}>Strona <span style={{fontWeight: 900}}>BLOG</span> w budowie..</h1>*/}

            <section className="blog">
                <div className="container">
                    <div className="blog-posts">
                        <div className="blog-post">
                            {data && data.map(entry => {
                            return (
                            <>
                                <Link to={`/blogs/${entry.id}`} className='blog-post-a'>
                                    <img key={entry.id} src={entry.photo || null} className='blog-post-img' alt="Blog post image"/>
                                </Link>
                                <div className="blog-post-content">
                                    <h3 className="blog-title"><Link to='/blogs/1'>{entry.title}</Link></h3>
                                    <p className="blog-meta">{entry.author}</p>
                                    <p className="blog-excerpt">{entry.shortDesc}</p>
                                </div>
                            </>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogAll;