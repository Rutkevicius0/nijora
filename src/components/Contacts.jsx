import React from 'react';
import css from './Contacts.module.css';
export default function Contacts() {
  return (
    <section id="contacts" className={css.container}>
      <div>
        <h2>NIJORA</h2>
        <p>Juoduju ir spalvotuju metalu supirkimas</p>
        <p>Prekyba kietu kuru</p>
      </div>

      <div>
        <h3>Rekvizitai</h3>
        <p>Girininkijos g. 4, LT-33102, Azubaliu k., Moletu raj. </p>
        <p>Imones kodas 167561746</p>
        <p>PVM kodas LT100002714110</p>
        <p>AB Luminor a/s LT 0000 0000 0000 0000 </p>
      </div>
      <div>
        <h3>Kontaktai</h3>
        <p>Tel.: +37068501316</p>
        <p>Tel.: +37065039145</p>
        <p>El. p.: nijorama@gmail.com</p>
      </div>
    </section>
  );
}
