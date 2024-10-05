import React, { useState, useEffect } from "react";
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <h1 className="logo">
        A.Orkhan
      </h1>
      <nav className={`navbar ${isOpen && "open"}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="toggle" onClick={toggleIcon}>
        {isOpen ? (
          <RiCloseLargeLine className="burgerMenu" />
        ) : (
          <RiMenu3Fill className="burgerMenu" />
        )}
      </div>
    </header>
  );
};

export default Header;
