import {useState} from "react";

function Header() {
    const [active, setActive] = useState("");
    // const [hidden, setHidden] = useState("");

    function mobileMenu() {
        // console.log("test");
        setActive(prev => prev ? "" : "active");
    }

    return (
        <>
            <header className="header">
                <a href="/" className="logo__link">
                    <img src="/src/assets/images/logo-black.png" alt="Marciniak logo" className='header-logo'/>
                </a>
                <nav className={`nav-header ${active}`}>
                    <ul className={`ul-header ${active}`}>
                        <li className='li-header'><a href="/" className="nav__link">Strona główna</a></li>
                        <li className='li-header'><a href="/oferta" className="nav__link">Oferta</a></li>
                        <li className='li-header'><a href={`/blogs`} className="nav__link">Blog</a></li>
                        <li className='li-header'><a href="/galeria" className="nav__link">Galeria</a></li>
                    </ul>
                </nav>

                <button
                    onClick={mobileMenu}
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
