import {Link, useParams} from "react-router-dom";
function BlogAll() {

    return (
        <>

            <h1 style={{fontWeight: 500}}>Strona <span style={{fontWeight: 900}}>BLOG</span> w budowie..</h1>

            {/*<section className="blog">*/}
            {/*    <div className="container">*/}
            {/*        <div className="blog-posts">*/}

            {/*            /!* Pojedyńcza sekcja blog*!/*/}
            {/*            <div className="blog-post">*/}
            {/*                /!* Można kliknąć na zdjęcie i odpali się artykuł *!/*/}
            {/*                <Link to={`/blogs/${blog[0].id}`} className='blog-post-a'>*/}
            {/*                    /!* Zdjęcie przypisane do danego bloga *!/*/}
            {/*                    <img*/}
            {/*                        key={blog[0].id}*/}
            {/*                        src={blog[0].photo || null}*/}
            {/*                        className='blog-post-img'*/}
            {/*                        alt="Blog post image"/>*/}
            {/*                </Link>*/}
            {/*                <div className="blog-post-content">*/}
            {/*                    /!* Tytuł przypisany do bloga - można kliknąć i przeniesie nas do owego artykułu *!/*/}
            {/*                    <h3 className="blog-title"><Link to='/blogs/1'>{blog[0].title}</Link></h3>*/}
            {/*                    /!* Autor przypisany do bloga *!/*/}
            {/*                    <p className="blog-meta">{blog[0].author}</p>*/}
            {/*                    /!* Krótki opis przypisany do bloga *!/*/}
            {/*                    <p className="blog-excerpt">{blog[0].shortDesc}</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* Pojedyńcza sekcja blog*!/*/}
            {/*            <div className="blog-post">*/}
            {/*                /!* Można kliknąć na zdjęcie i odpali się artykuł *!/*/}
            {/*                <Link to={`/blogs/${blog[1].id}`} className='blog-post-a'>*/}
            {/*                    /!* Zdjęcie przypisane do danego bloga *!/*/}
            {/*                    <img*/}
            {/*                        key={blog[1].id}*/}
            {/*                        src={blog[1].photo || null}*/}
            {/*                        className='blog-post-img'*/}
            {/*                         alt="Blog post image"/>*/}
            {/*                </Link>*/}
            {/*                <div className="blog-post-content">*/}
            {/*                    /!* Tytuł przypisany do bloga - można kliknąć i przeniesie nas do owego artykułu *!/*/}
            {/*                    <h3 className="blog-title"><Link to='/blogs/2'>{blog[1].title}</Link></h3>*/}
            {/*                    /!* Autor przypisany do bloga *!/*/}
            {/*                    <p className="blog-meta">{blog[1].author}</p>*/}
            {/*                    /!* Krótki opis przypisany do bloga *!/*/}
            {/*                    <p className="blog-excerpt">{blog[1].shortDesc}</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* Pojedyńcza sekcja blog*!/*/}
            {/*            <div className="blog-post">*/}
            {/*                /!* Można kliknąć na zdjęcie i odpali się artykuł *!/*/}
            {/*                <Link to={`/blogs/${blog[2].id}`} className='blog-post-a'>*/}
            {/*                    /!* Zdjęcie przypisane do danego bloga *!/*/}
            {/*                    <img*/}
            {/*                        key={blog[2].id}*/}
            {/*                        src={blog[2].photo || null}*/}
            {/*                        className='blog-post-img'*/}
            {/*                         alt="Blog post image"/>*/}
            {/*                </Link>*/}
            {/*                <div className="blog-post-content">*/}
            {/*                    /!* Tytuł przypisany do bloga - można kliknąć i przeniesie nas do owego artykułu *!/*/}
            {/*                    <h3 className="blog-title"><Link to='/blogs/3'>{blog[2].title}</Link></h3>*/}
            {/*                    /!* Autor przypisany do bloga *!/*/}
            {/*                    <p className="blog-meta">{blog[2].author}</p>*/}
            {/*                    /!* Krótki opis przypisany do bloga *!/*/}
            {/*                    <p className="blog-excerpt">{blog[2].shortDesc}</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
}

export default BlogAll;