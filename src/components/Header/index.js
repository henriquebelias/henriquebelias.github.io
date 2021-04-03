import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.scss';
import MobileNav from '../MobileNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className="mobile-menu" onClick={toggleMenu}>
        {!isOpen ? <FaBars /> : <FaTimes /> }
      </div>
      {isOpen && <MobileNav />}
      <nav className="desktop-nav">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projetos</li></Link>
          <Link to="/about-me"><li>Sobre mim</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;