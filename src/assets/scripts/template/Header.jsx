import {useState} from "react";

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
                <a href="/" className="logo__link">
                    <img src="/src/assets/images/logo-black.png" alt="Przywództwo w sporcie logo" className='header-logo'/>
                </a>
                <nav className={`nav-header ${isActive ? 'active' : 'hidden'}`}>
                    <ul className={`ul-header ${isActive ? 'active' : 'hidden'}`}>
                        <li className='li-header'><a href="/" className="nav__link">Strona główna</a></li>
                        <li className='li-header'><a href="/oferta" className="nav__link">Oferta</a></li>
                        <li className='li-header'><a href={`/blogs`} className="nav__link">Blog</a></li>
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
