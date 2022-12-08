import * as React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ nav }) => {
  const link = `/${nav.toLowerCase()}`;
  return (
    <Link to={link}>
      <div className={`navigation-buttons`}>
        <p>{nav}</p>
      </div>
    </Link>
  );
};

export default function Header() {
  const buttons = ["Inicio", "Cronómetro", "Countdown",];
  return (
    <header>
      <img src="/logo-utn.png" alt="Logo de UTN" />
      <nav>
        {buttons.map((nav) => (
          <NavButton nav={nav} key={nav} />
        ))}
      </nav>
    </header>
  );
}
