function Footer() {
    return (
        <footer className="page-footer cyan lighten-1">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/DmitriSelianov99/react-shop" target='_blank'>Repo</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer}