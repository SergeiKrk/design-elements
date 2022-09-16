import React, { useRef } from "react";
import s from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const navRef = useRef;
  const shovNavbar = () => {
    navRef.current.classList.toggle("active");
  };
  return (
    <div className={s.navBar}>
      <a className={s.logo} href="/">
        Logo
      </a>
      <div className={s.menuToggle} onClick={shovNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
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
