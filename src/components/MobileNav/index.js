import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const MobileNav = () => (
  <nav className="mobile-nav">
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/projects"><li>Projetos</li></Link>
      <Link to="/about-me"><li>Sobre mim</li></Link>
    </ul>
  </nav>
);

export default MobileNav;