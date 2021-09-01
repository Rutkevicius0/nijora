import React from 'react';
import css from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={css.container}>
      <p>&copy; 2021 Visos teises saugomos</p>
      <a className={css.button} href="#top">
        <i
          class="fa fa-arrow-circle-up"
          style={{ fontSize: 40 }}
          aria-hidden="true"
        ></i>
      </a>
    </footer>
  );
}
