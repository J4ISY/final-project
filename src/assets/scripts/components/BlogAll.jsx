import {Link, useParams} from "react-router-dom";

export const blog = [
    {
        id: 1,
        title: "W Europie odkryto niezwykle rzadką arabską inskrypcję. Pochodzi z okresu średniowiecza",
        photo: "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/84/pismo-kufickie_1383705.webp",
        author: "Dodano: 05 maja 2023 | Autor: JAKUB RYBSKI",
        shortDesc: "Archeolodzy, którzy prowadzili wykopaliska na Malcie, odnaleźli fragment wapiennej steli, na której znajdowała się arabska inskrypcja. Odkrycie rzuca światło na historię wyspy, gdy zamieszkiwali ją w większości muzułmanie."
    },
    {
        id: 2,
        title: "Bezludna wyspa w Szkocji szuka właściciela. Jest tańsza niż mieszkanie, ale są haczyki",
        photo: "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/84/bezludna-wyspa-szkocja_1383684.webp",
        author: "Dodano: 05 maja 2023 | Autor: MATEUSZ ŁYSIAK",
        shortDesc: "Bezludna wyspa u wybrzeży Szkocji trafiła na sprzedaż. Jej cena może zaskakiwać, ale kupujący musi liczyć się z ważnymi szczegółami."
    },
    {
        id: 3,
        title: "Najgorętsza planeta kosmosu. W jej chmurach odkryto bardzo rzadki pierwiastek",
        photo: "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/84/kelt-9-b_1383681.webp",
        author: "Dodano: 04 maja 2023 | Autor: MAGDALENA SALIK",
        shortDesc: "W atmosferze egzoplanety KELT-9b naukowcy wykryli terb, pierwiastek należący do lantanowców. Po raz pierwszy udało się go znaleźć na innej planecie niż Ziemia. Na Ziemi występuje rzadko i jest srebrzystym miękkim metalem. Na KELT-9b został wykryty w chmurach."
    }
];

function BlogAll() {
    // const params = useParams();

    return (
        <>
            <section className="blog">
                {/*tO JEST BLOG {params.blogId}*/}
                <div className="container">
                    {/*<h2 className="section-title">Blog</h2>*/}
                    <div className="blog-posts">

                        <div className="blog-post">
                            <Link to='/blogs/1' className='blog-post-a'>
                                <img
                                    key={blog[0].id}
                                    src={blog[0].photo || null}
                                    className='blog-post-img'
                                    alt="Blog post image"
                                />
                            </Link>
                            <div className="blog-post-content">
                                <h3 className="blog-title"><Link to='/blogs/1'>{blog[0].title}</Link></h3>
                                <p className="blog-meta">{blog[0].author}</p>
                                <p className="blog-excerpt">{blog[0].shortDesc}</p>
                            </div>
                        </div>

                        <div className="blog-post">
                            <Link to='/blogs/2' className='blog-post-a'>
                                <img
                                    key={blog[1].id}
                                    src={blog[1].photo || null}
                                    className='blog-post-img'
                                     alt="Blog post image"/>
                            </Link>
                            <div className="blog-post-content">
                                <h3 className="blog-title"><Link to='/blogs/2'>{blog[1].title}</Link></h3>
                                <p className="blog-meta">{blog[1].author}</p>
                                <p className="blog-excerpt">{blog[1].shortDesc}</p>
                            </div>
                        </div>

                        <div className="blog-post">
                            <Link to='/blogs/3' className='blog-post-a'>
                                <img
                                    key={blog[2].id}
                                    src={blog[2].photo || null}
                                    className='blog-post-img'
                                     alt="Blog post image"/>
                            </Link>
                            <div className="blog-post-content">
                                <h3 className="blog-title"><Link to='/blogs/3'>{blog[2].title}</Link></h3>
                                <p className="blog-meta">{blog[2].author}</p>
                                <p className="blog-excerpt">{blog[2].shortDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogAll;