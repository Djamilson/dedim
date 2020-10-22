import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { Container, MenuContainer } from './styles';

const Menu: React.FC = () => {
  const scrollPosition = window.pageYOffset;

  // If back to element (use Ref)
  const [s, setS] = useState(0);
  const [ss, setSs] = useState(s);

  function onClick() {
    alert('click');
    console.log('mmm', window.pageYOffset);
    setS(s + 150);
  }

  useEffect(() => {
    setSs(s);
  }, [s]);

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
