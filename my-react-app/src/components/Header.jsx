import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_header.scss";

const Header = () => {
  return (
    <header className="header" aria-label="En-tête du site">
      <Link to="/" className="logo" aria-label="Retour à l'accueil">
        <div className="logo-container">
          <svg width="55" height="63" viewBox="0 0 55 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <title>Logo Kasa</title>
            <path d="M20.5745 34.6485L9.34014 46.1362V62.2561H0.5V0H9.34014V34.8338L42.859 0H52.9883L26.6521 27.9782L54.83 62.2561H44.5165L20.5745 34.6485Z" fill="#FF6060" />
          </svg>

          <div className="logo-house">
            <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <title>Icône maison</title>
              <path d="M46.7658 20.4632L24.8496 7.67844L12.6944 0.637573L0.723389 21.5749L0.907555 41.2152L22.6396 54L24.8496 52.703V34.1744L34.6106 16.9428L44.5557 22.6866V41.2152L46.7658 39.9182V20.4632Z" fill="#FF6060" />
            </svg>

            <div className="logo-rectangle">
              <svg width="6" height="17" viewBox="0 0 6 17" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(0, 10)" aria-hidden="true">
                <title>Icône rectangle</title>
                <path d="M0.0322266 3.84194V16.4414L5.37314 13.2915V0.692078L0.0322266 3.84194Z" fill="#FF6060" />
              </svg>
            </div>
          </div>
          <svg width="40" height="49" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <title>Lettre K</title>
            <path d="M0.289307 43.2534L3.78853 36.5831C7.84026 39.3624 14.102 41.4005 20.1796 41.4005C28.0989 41.4005 31.2298 38.9918 31.2298 34.9155C31.2298 24.3542 1.57849 33.4332 1.57849 14.7193C1.57849 6.19616 9.12945 0.637573 21.1005 0.637573C27.1781 0.637573 34.1765 2.30515 38.2282 4.89915L34.5448 11.5695C30.3089 8.79016 25.7047 7.86373 21.1005 7.86373C13.7337 7.86373 10.0503 10.643 10.0503 14.3487C10.0503 25.4659 39.7016 16.3869 39.7016 34.7302C39.7016 43.2534 31.9665 48.6267 19.4429 48.6267C11.892 48.812 4.15687 46.4032 0.289307 43.2534Z" fill="#FF6060" />
          </svg>

          <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <title>Lettre A</title>
            <path d="M41.8217 19.7221V48.2561H33.7182V41.9564C30.9557 46.218 25.6148 48.6267 18.248 48.6267C7.56614 48.6267 0.936035 42.8828 0.936035 34.7303C0.936035 27.1335 5.72444 21.0191 19.7213 21.0191H33.1657V19.3515C33.1657 12.1254 28.9298 8.04906 20.6422 8.04906C15.1171 8.04906 9.40783 10.0872 5.72444 13.0518L2.22522 6.56677C7.01362 2.67577 14.0121 0.452332 21.563 0.452332C34.6391 0.637618 41.8217 6.93735 41.8217 19.7221ZM33.3499 33.8038V27.1335H20.2738C11.802 27.1335 9.40783 30.4687 9.40783 34.3597C9.40783 38.9918 13.2754 41.9564 19.7213 41.9564C26.1673 42.1417 31.324 39.3624 33.3499 33.8038Z" fill="#FF6060" />
          </svg>
        </div>
      </Link>

      <nav className="header__nav">
        <Link to="/" className="nav__link" title="Aller à la page d'accueil">
          Accueil
        </Link>
        <Link to="/about" className="nav__link" title="En savoir plus sur nous">
          À Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;