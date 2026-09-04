import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="logo logo--light">Code<span>Camp</span></div>
          <p className="footer__text">Пучеглазая чюня</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Контакты</h4>
          <p className="footer__text">chunya.pucheglkazka@gmai.com</p>
          <p className="footer__text">+8 800 555 35 35</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;