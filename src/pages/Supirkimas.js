import React from 'react';
import { MainNav } from '../components/MainNav';

export const Supirkimas = () => {
  return (
    <div className="scrap-service-container">
      <MainNav />
      <div className="services-slides">
        <img
          src="https://www.jdogjunkremoval.com/wp-content/uploads/2019/04/scrapmetal.jpg"
          alt=""
          className="slide-img"
        />
        <button className="slide-left"> left </button>
        <button className="slide-right"> right </button>
        <div className="slide-info">
          <h1 className="slide-title">Metalo lauzo supirktuve</h1>
          <h2 className="slide-address fcw">
            Girinkijos g. 4, Azubaliu k., Moletu rajonas
          </h2>
          <h2 className="slide-phone fcw">Tel.: +37068501316</h2>
        </div>
      </div>
      <div className="prices-container">
        <table>
          <th>Kainos</th>
        </table>
      </div>
      <div className="scrap-services-subcontainer">
        <h2 className="">Paslaugos</h2>
      </div>
    </div>
  );
};
