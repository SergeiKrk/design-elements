import React from "react";
import style from "./navBar.module.css";

export const NavBar = () => {
  return (
    <div className={style.navBar}>
      <a href="/">Logo</a>
      <div className={style.menuToggle}>
        <nav>
          <ul>
            <li>
              <a href="/" className={style.active}>
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
      </div>
    </div>
  );
};
