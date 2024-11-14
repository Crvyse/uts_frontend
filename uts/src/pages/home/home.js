import React from "react";
import Foto from "../../component/foto";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Foto />
      <div>
        <h1 className="hubungi">Hubungi kami di:</h1>
        <div className="social-links-container">
          <a
            href="https://www.instagram.com/banyuwangiparkofficial/"
            className="contact__social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6281333358088&text&type=phone_number&app_absent=0"
            className="contact__social-link"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div>
          <h1>hadiri kami di:</h1>
          <div className="map">
            <iframe title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.4304686631285!2d114.33406367405782!3d-8.259878382992035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15bfbc1b25eef%3A0xeb89f2659776d39d!2sBanyuwangi%20Park!5e0!3m2!1sid!2sid!4v1731508397002!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
