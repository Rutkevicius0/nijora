import React from 'react';
import css from './Services.module.css';
export default function Services() {
  return (
    <section id="services">
      <div className={css.container}>
        <p>
          R.R. P.I. NIJORA iš įmonių ir fizinių asmenų superka juodųjų ir
          spalvotųjų metalų laužą. Metalo laužą galite atvežti į mūsų įmonės
          aikštelę Moletuose, didesnius kiekius galime išvešti savo transportu
          iš Jūsų nurodytos vietos. Turime specialią techniką – sunkvežimi su
          hidromanipuliatoriais metalo laužui krauti.
        </p>
      </div>
      <div className={css.container} style={{ backgroundColor: '#f68144' }}>
        <ul>
          <h2 style={{ marginTop: 0 }}>Perkame: </h2>
          <li>Plienas 3A / Ketus 17A (1500x500x500)</li>
          <li>Plienas 5A-negabaritas (virš 1500x500x500)</li>
          <li>Skarda 12A</li>
          <li>Varis</li>
          <li>Zalvaris ir bronza</li>
          <li>Aliuminis (storasienis; nuo variklių (be plieno detalių))</li>
          <li>Aliuminis (skarda; nerūšiuotas)</li>
          <li>Nerūdijantis plienas</li>
          <li>Šv. akumuliatorių laužas</li>
        </ul>
      </div>
    </section>
  );
}
