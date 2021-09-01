import React from 'react';
import css from './Services.module.css';
export default function Services() {
  return (
    <section id="services">
      <div className={css.container}>
        <p>
          R.R. P.I. NIJORA prekiauja ivairiu kietuoju kuru. Parduodama ivairiais
          kiekiais. Galime pristatyti i Jusu pageidaujama vieta uz papildoma
          mokesti.
        </p>
      </div>
      <div className={css.container} style={{ backgroundColor: '#f68144' }}>
        <ul>
          <h2 style={{ marginTop: 0 }}>Parduodame: </h2>
          <li>Akemns anglis didmaisiuose</li>
          <li>Akmens anglis maiseliuose</li>
          <li>Akmens anglis "Zirnis"</li>
          <li>Uosio pjuvenu briketai</li>
          <li>Misraus spygliuocio pjuvenu briketai</li>
          <li>Medienos pjuvenu granules din plus</li>
        </ul>
      </div>
    </section>
  );
}
