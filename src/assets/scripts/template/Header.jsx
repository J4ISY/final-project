const mobileNav = document.querySelector('.ul-header');
const burgerBtn = document.querySelector('.burger');
function Header() {

    function mobileMenu() {
        mobileNav.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        console.log('test');
    }

    return (
        <>
            <header className="header">
                <a href="/" className="logo__link">
                    <img src="/src/assets/images/trenerliderlogo.jpg" alt="Marciniak logo" className='header-logo'/>
                </a>
                <nav className="nav-header">
                    <ul className='ul-header'>
                        <li className='li-header'><a href="/" className="nav__link">Strona główna</a></li>
                        <li className='li-header'><a href="/oferta" className="nav__link">Oferta</a></li>
                        <li className='li-header'><a href="#" className="nav__link">Blog</a></li>
                        <li className='li-header'><a href="#" className="nav__link">Galeria</a></li>
                    </ul>
                </nav>

                <button
                    onClick={mobileMenu}
                    className="burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </header>
        </>
    )
}

export default Header
