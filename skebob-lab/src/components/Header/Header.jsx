import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="container header__inner">
          <div className="logo">Code<span>Camp</span></div>
          <nav className="nav">
            <a href="#" className="nav__link">Курсы</a>
            <a href="#" className="nav__link">Не Курсы</a>
            <a href="#" className="nav__link">Отзывы</a>
            <a href="#" className="nav__link">Не Отзывы</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;