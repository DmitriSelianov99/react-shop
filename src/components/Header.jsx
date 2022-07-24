function Header() {
    return (
        <nav className="cyan lighten-1">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">React Shop</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://github.com/DmitriSelianov99/react-shop" target='_blank'>Repo</a></li>
            </ul>
            </div>
        </nav>
    )
}

export {Header}