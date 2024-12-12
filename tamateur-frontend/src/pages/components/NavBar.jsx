import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './Overlay.css'; //imports

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* burger Menu icon */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}> {/* burger menu animation */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Menu */}
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-button" onClick={closeMenu}>Etusivu</Link>
        </li>
        <li className="navbar-item">
          <Link to="/statsit" className="navbar-button" onClick={closeMenu}>Statsit</Link>
        </li>
        <li className="navbar-item">
          <Link to="/kuvagalleria" className="navbar-button" onClick={closeMenu}>Kuvagalleria</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Ilmoittautumiset" className="navbar-button" onClick={closeMenu}>Ilmoittautumiset</Link>
        </li>
        <li className="navbar-item">
          <Link to="/meista" className="navbar-button" onClick={closeMenu}>Meistä</Link>
        </li>
        <li className="navbar-item">
          <Link to="/yhteistyokumppanit" className="navbar-button" onClick={closeMenu}>Yhteistyökumppanit</Link>
        </li>
      </ul>
      {isOpen && <div className="overlay open" onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;
