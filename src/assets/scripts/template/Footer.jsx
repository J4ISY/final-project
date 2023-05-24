function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-left">
                    <p className="footer-text">&copy; 2023 Przywództwo w sporcie. Wykonanie:
                        <a href="https://github.com/J4ISY" className="dev" target='_blank' rel='noreferrer'>
                            Jakub Marciniak
                        </a>
                    </p>
                </div>
                <div className="footer-right">
                    <a href="#" className="footer-links"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                    <a href="#" className="footer-links"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;