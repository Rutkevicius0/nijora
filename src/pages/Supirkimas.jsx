import React from 'react';
import { MainNav } from '../components/MainNav';
import Services from '../components/Services';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export const Supirkimas = () => {
  return (
    <div className="scrap-service-container">
      <div className="info">
        <h1>miau</h1>
      </div>
      <MainNav />
      <div className="services-slides">
        <div className="overlay"></div>
        <img
          src="https://www.jdogjunkremoval.com/wp-content/uploads/2019/04/scrapmetal.jpg"
          alt=""
          className="slide-img"
          onClick={() => {
            document.getElementsByClassName('info').classlist.add = 'show';
          }}
        />
        <div className="slide-info">
          <h1 className="slide-title">Metalo lauzo supirktuve</h1>
          <h2 className="slide-address">
            Girinkijos g. 4, Azubaliu k., Moletu rajonas
          </h2>
          <h2 className="slide-phone ">Tel.: +37068501316</h2>
        </div>
      </div>
      <Services id="services" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.9587085336325!2d25.42587069838339!3d55.23645047997199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd612a3acf51f5%3A0x7e9c0b070a222e6d!2sMetalo%20lau%C5%BEo%20supirktuv%C4%97%20NIJORA!5e0!3m2!1slt!2slt!4v1630485378271!5m2!1slt!2slt"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        id="howToFind"
        title="kaiprasti"
      ></iframe>
      <Contacts id="contacts" />
      <Footer />
    </div>
  );
};
