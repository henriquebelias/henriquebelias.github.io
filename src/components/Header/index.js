import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HeaderContainer, Menu } from './HeaderElements';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <Menu onClick={ toogleMenu }>
        {!isOpen ? <FaBars /> : <FaTimes /> }
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
