import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FooterContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContainer>
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
      </FooterContainer>
    </Container>
  );
};

export default Footer;
