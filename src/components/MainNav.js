import React from 'react';
import { Link } from 'react-router-dom';

export const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="logo">
        <h3>NIJORA</h3>
      </div>
      <div className="main-nav__links">
        <Link className="main-nav__single-link" to="/">
          Choose service
        </Link>
        <Link className="main-nav__single-link" to="/supirkimas">
          Pradzia
        </Link>
        <Link className="main-nav__single-link" to="/supirkimas/paslaugos">
          Paslaugos
        </Link>
        <Link className="main-nav__single-link" to="/supirkimas/kontaktai">
          Kontaktai
        </Link>
      </div>
    </div>
  );
};
