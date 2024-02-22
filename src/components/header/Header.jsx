import React from 'react'
import "./_header.scss"

import logo from "./img/logo.svg"
import heart from "./img/heart.svg"
import cart from "./img/cart.svg"

export const Header = () => {
  return (
          <header className="header">
        <div className="container">
          <div className="header__top">
            <ul className="header__socials">
              <li className="header__location">Екатеринбург 37</li>
              <li className="header__location">
                <a href="tel:+7123456789">+7(123)456 78-90</a>
              </li>
            </ul>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className="header__user">
              <li className="header__user-item">
                <input
                  type="search"
                  className="header__user-input"
                  placeholder="Поиск"
                />
              </li>
              <li className="header__user-item">
                <button className="header__user-btn">
                  <img src={heart} alt="heart" />
                </button>
              </li>
              <li className="header__user-item">
                <button className="header__user-btn">
                  <img src={cart} alt="cart" />
                </button>
              </li>
            </ul>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Новинки
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Платья
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link currentPage">
                  Верх
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  НИз
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  куртки
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Мелочи
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Костюмы
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  #Boorivagirls
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
