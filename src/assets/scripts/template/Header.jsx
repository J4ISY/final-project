
function Header() {

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <nav className="nav-header nav-left">
            <ul className='ul-header ul-header-left'>
              <li className='li-header li-space-left'><a href="/" className="nav__link">Strona główna</a></li>
              <li className='li-header'><a href="/oferta" className="nav__link">Oferta</a></li>
            </ul>
          </nav>
          <div className="logo">
            <a href="/" className="logo__link"></a>
          </div>
          <nav className="nav-header nav-right">
            <ul className='ul-header ul-header-right'>
              <li className='li-header li-space-right'><a href="#" className="nav__link">Blog</a></li>
              <li className='li-header'><a href="#" className="nav__link">Galeria</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
