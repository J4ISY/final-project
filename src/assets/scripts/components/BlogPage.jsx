// import {Link, useParams} from "react-router-dom";
// import {blog} from "./BlogAll.jsx";
// import {useEffect, useState} from "react";
// import PropTypes from "prop-types";
//
// const BlogPage = ({ match }) => {
//     const [post, setPost] = useState({});
//
//     useEffect(() => {
//         if (match && match.params && match.params.id) {
//             const id = parseInt(match.params.id);
//             const foundPost = blog.find(post => post.id === id);
//             if (foundPost) {
//                 setPost(foundPost);
//             }
//         }
//     }, [match]);
//
//     return (
//         <>
//             <article className="blog-single">
//                 <button className="blog-single-btn"><Link to="/blogs"><i className="arrow left"></i></Link></button>
//                 <div className="blog-wrapper">
//                     {/* Zdjęcie klikniętego bloga */}
//                     <img src={post.photo} alt="" className="blog-single-img"/>
//                     <div className="blog-single-content">
//                         {/* Tytuł klikniętego bloga*/}
//                         <h1 className="blog-single-title">{post.title}</h1>
//                         {/* Autor klikniętego bloga */}
//                         <h5 className="blog-single-author">{post.author}</h5>
//                         {/* Dłgui opis klikniętego bloga */}
//                         <p className="blog-single-text">{post.longDesc}</p>
//                     </div>
//                 </div>
//             </article>
//         </>
//     );
// }
//
// BlogPage.propTypes = {
//     match: PropTypes.shape({
//         params: PropTypes.shape({
//             id: PropTypes.string.isRequired,
//         }).isRequired,
//     }).isRequired,
// };
//
// export default BlogPage