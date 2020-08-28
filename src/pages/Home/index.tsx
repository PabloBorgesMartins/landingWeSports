import React from "react";
import { FiInstagram } from "react-icons/fi";
import {
  FaDiscord,
  FaTelegramPlane,
  FaFacebook,
  FaCopyright,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.png";
//import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header></header>

        <main>
          <div id="subscribeTop">
            <p className="subscribeTopTitle">Falou treino, falou WeSports</p>
            <div className="subscribeContainer">
              <p className="subscribeText">Assine nossa Newsletter</p>
              <div className="rowSubscribe">
                <input
                  type="email"
                  name="emailInput"
                  id="emailInput"
                  value="seu melhor email"
                />
                <button id="emailButton">Assinar</button>
              </div>
            </div>
          </div>
          <div id="subscribeBottom">
            <p className="subscribeBottomTitle">Acompanhe as novidades</p>
            <div className="subscribeContainer">
              <p className="subscribeText">Assine nossa Newsletter</p>
              <div className="rowSubscribe">
                <input
                  type="email"
                  name="emailInput"
                  id="emailInput"
                  value="seu melhor email"
                />
                <button id="emailButton">Assinar</button>
              </div>
            </div>
          </div>
          <div id="connectUsIcons">
            <p className="iconBottomTitle">Conecte-se com a gente</p>
            <div className="rowSubscribe">
              <a href="/create-point">
                <FaDiscord size="50" color="#20e0a0" />
              </a>
              <a href="/create-point">
                <FaTelegramPlane size="50" color="#20e0a0" />
              </a>
              <a href="https://www.instagram.com/willsmith/">
                <FiInstagram size="50" color="#20e0a0" />
              </a>
              <a href="/create-point">
                <FaFacebook size="50" color="#20e0a0" />
              </a>
            </div>
          </div>
        </main>
        <footer>
          <div id="copyrightContainer">
            <p>copyright&nbsp;</p>
            <FaCopyright />
            <p>&nbsp;2020 All rights reserved | made with&nbsp;</p>
            <FaHeart />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
