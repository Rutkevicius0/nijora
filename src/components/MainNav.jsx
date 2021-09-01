import React from 'react';
import { Link } from 'react-router-dom';

export const MainNav = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <h3 className="logo-text">NIJORA</h3>
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
