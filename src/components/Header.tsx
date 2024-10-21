import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link for routing
import CatalogLogo from "../CatalogLogo.svg";
import "./Header.css";

type NavLink = {
  label: string;
  to: string;
};

// Navigation links
const navLinks: NavLink[] = [
  {
    label: "Catalog",
    to: "/"
  },
  {
    label: "Manage",
    to: "/manage"
  },
  {
    label: "About",
    to: "/about"
  }
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="App-header">
      <div className="logo">
        <Link to="/">
          <img src={CatalogLogo} alt="Dog's Catalog Logo" />
        </Link>
      </div>

      <nav className="nav-container">
        <ul aria-label="Navigation list">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link to={navLink.to} className={location.pathname === navLink.to ? "active" : ""}
                    aria-current={location.pathname === navLink.to ? "page" : undefined}>
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
