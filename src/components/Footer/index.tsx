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
              <span>© 2020 Blog do Dedim Barbeiro nº 10888</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <span> Todos os direitos reservados </span>
            </Link>
          </li>
        </ul>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
