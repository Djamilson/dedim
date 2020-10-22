import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, FooterContainer } from './styles';

const Footer: React.FC = () => {
  const gotoSectionTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <Container>
      <FooterContainer>
        <button
          type="button"
          className="btn btn-primary mr-3"
          onClick={gotoSectionTop}
        >
          <FiArrowUpCircle size={26} color="#FFF" />
        </button>

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
