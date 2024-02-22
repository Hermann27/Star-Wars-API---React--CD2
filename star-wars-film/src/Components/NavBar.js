import React,{useState} from "react";
import "../navbar.css"

export default function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="/" className="nav__brand nav__a">
        Home
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/FilmList" className="nav__link nav__a">
            Films
          </a>
        </li>
        <li className="nav__item">
          <a href="/Characters" className="nav__link nav__a">
            Characters
          </a>
        </li>
        <li className="nav__item">
          <a href="/Search" className="nav__link nav__a">
            Search Character
          </a>
        </li>
      </ul>
      <div onClick={navToggle}   className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
