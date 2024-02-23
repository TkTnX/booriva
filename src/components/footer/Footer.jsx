import React from "react";

import "./_footer.scss";
import avatar from "./img/avatar.png";
import insta from "./img/insta.svg";
import facebook from "./img/facebook.svg";
import logoRed from "./img/logoRed.svg";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__row">
          <div class="logo">
            <img src={logoRed} alt="logo" />
          </div>
          <nav class="footer__nav">
            <ul class="footer__list">
              <li class="footer__item footer__item-title">ИНФО</li>
              <li class="footer__item">
                <a href="#!">Контакты</a>
              </li>
              <li class="footer__item">
                <a href="#!">Система лояльности</a>
              </li>
              <li class="footer__item">
                <a href="#!">Обмен и возврат</a>
              </li>
              <li class="footer__item">
                <a href="#!">Доставка и оплата</a>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__item footer__item-title">НАШ АДРЕС</li>
              <li class="footer__item">г.Екатеринбург, ул. 37</li>
              <li class="footer__item">Пн — Вс: с 11:00 до 21:00</li>
            </ul>
            <ul class="footer__list">
              <li class="footer__item footer__item-title">СОЦ.СЕТИ</li>
              <div class="footer__socials">
                <li class="footer__item">
                  <a href="#!" class="footer__link">
                    <img src={insta} alt="insta" />
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#!" class="footer__link">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
              </div>
            </ul>
          </nav>
          <div class="footer__feedback">
            <div class="footer__feedback-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div class="footer__feedback-text">
              <p class="footer__feedback-desc">
                Нам важно знать, что ты думаешь про нас! Просто напиши мне!
              </p>
              <a href="#!" class="footer__feedback-link">
                Написать Иванке
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
