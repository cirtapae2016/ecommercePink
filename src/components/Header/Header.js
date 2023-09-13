import React from 'react';
import Logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav id="minav" className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" href="index.html">
        <img src={Logo} alt="LogoPink" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/multimedia.html">Multimedia</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/noticias.html">Historia</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/noticias.html">Noticias</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/contacto.html">Contacto</a>
            </li>
        </ul>
    </div>
</nav>
  )
}
