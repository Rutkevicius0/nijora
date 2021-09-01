import React from 'react';
import { Link } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const ChooseService = () => {
  return (
    <div>
      <div className="service-container">
        <div className=" service service__one">
          <img
            src="https://www.jdogjunkremoval.com/wp-content/uploads/2019/04/scrapmetal.jpg"
            alt=""
            className="service__picture-one"
          />
          <Link to="/supirkimas" className="service__link-one">
            METALO LAUZO SUPIRKIMAS
          </Link>
        </div>
        <div className="service service__two">
          <img
            src="https://www.clarke-energy.com/wp-content/uploads/2020/01/Coal-use-for-all-for-now-scaled.jpg"
            alt=""
            className="service__picture-two"
          />
          <Link to="/prekyba" className="service__link-two">
            PREKYBA KIETU KURU
          </Link>
        </div>
      </div>
    </div>
  );
};
