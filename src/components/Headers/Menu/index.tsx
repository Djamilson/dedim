import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuContainer } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuContainer>
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span> Projetos</span>
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
