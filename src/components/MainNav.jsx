import React from 'react';
import { Link } from 'react-router-dom';

export const MainNav = () => {
  const showLinks = () => {
    let links = document.getElementsByClassName('burger-links');
    console.log(links);
    links[0].classList.toggle('show-links');
  };
  return (
    <nav className="main-nav">
      <div className="logo">
        <h3 className="logo-text">NIJORA</h3>
      </div>
      <div className="burger-nav">
        <i
          onClick={showLinks}
          class="fa fa-bars burger-nav-icon"
          aria-hidden="true"
        ></i>
        <div className="burger-links">
          <Link onClick={showLinks} className="burger-nav__single-link" to="/">
            I pagrindini meniu
          </Link>
          <a
            onClick={showLinks}
            className="burger-nav__single-link"
            href="#top"
          >
            Pradzia
          </a>
          <a
            onClick={showLinks}
            className="burger-nav__single-link"
            href="#services"
          >
            Paslaugos
          </a>
          <a
            onClick={showLinks}
            className="burger-nav__single-link"
            href="#contacts"
          >
            Kontaktai
          </a>
        </div>
      </div>
      <div className="main-nav__links">
        <Link className="main-nav__single-link" to="/">
          I pagrindini meniu
        </Link>
        <a className="main-nav__single-link" href="#top">
          Pradzia
        </a>
        <a className="main-nav__single-link" href="#services">
          Paslaugos
        </a>
        <a className="main-nav__single-link" href="#contacts">
          Kontaktai
        </a>
      </div>
    </nav>
  );
};
