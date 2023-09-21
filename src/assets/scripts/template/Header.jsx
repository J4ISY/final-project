import {useState} from "react";
import {Link} from "react-router-dom";

function Header() {
    // const [active, setActive] = useState("");
    const [isActive, isSetActive] = useState(false);
    const [active, setActive] = useState("");

    function toggleMenu() {
        isSetActive(prevState => !prevState);
        setActive(prev => prev ? "" : "active");
    }

    return (
        <>
            <header className="header">
                <Link to="/" className="logo__link">
                    <img src="/src/assets/images/logo-black.png" alt="Przywództwo w sporcie logo" className='header-logo'/>
                </Link>
                <nav className={`nav-header ${isActive ? 'active' : 'hidden'}`}>
                    <ul className={`ul-header ${isActive ? 'active' : 'hidden'}`}>
                        <li className='li-header'><Link to="/" className="nav__link">Strona główna</Link></li>
                        <li className='li-header'><Link to="/oferta" className="nav__link">Oferta</Link></li>
                        <li className='li-header'><Link to={`/blogs`} className="nav__link">Blog</Link></li>
                    </ul>
                </nav>

                <button
                    onClick={toggleMenu}
                    className={`burger ${active}`}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </header>
        </>
    )
}

export default Header
