import React from "react";
import s from "./navBar.module.css";

export const NavBar = () => {
  return (
    <div className={s.navBar}>
      <a className={s.logo} href="/">
        Logo
      </a>
      <div className={s.menuToggle}>A</div>
      <nav className={s.nav}>
        <ul>
          <li>
            <a href="/" className={s.active}>
              Главная
            </a>
          </li>
          <li>
            <a href="/?#">О Нас</a>
          </li>
          <li>
            <a href="/?##">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={s.clearfix}></div>
    </div>
  );
};
