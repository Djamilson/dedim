import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useViewportScroll } from 'framer-motion';

import { Container, MenuContainer } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuContainer>
        <ul>
          <li>
            <Link to="/">
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span> Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span> Sobre </span>
            </Link>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
