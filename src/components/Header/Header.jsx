import './Header.scss';

export function Header() {
  return (
       <header className="header container">
        <h1 className="header__title">Moje domacnost</h1>
        <nav className="header__nav">
            <a className="header__menu" href="#">Home</a>
            <a className="header__menu" href="#">Úkoly</a>
            <a className="header__menu" href="#">Zasoby</a>
        </nav>

    </header>
  )
}