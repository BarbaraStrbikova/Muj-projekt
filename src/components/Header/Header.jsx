import './Header.scss';

export function Header() {
  return (
       <header class="header container">
        <h1 class="header__title">Moje domacnost</h1>
        <nav class="header__nav">
            <a class="header__menu" href="#">Home</a>
            <a class="header__menu" href="#">Úkoly</a>
            <a class="header__menu" href="#">Zasoby</a>
        </nav>

    </header>
  )
}