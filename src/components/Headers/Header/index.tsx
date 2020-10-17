import React from 'react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <FiFacebook size={26} color="#FFF" />
        </Link>
        <Link to="/">
          <FiTwitter size={26} color="#FFF" />
        </Link>
        <Link to="/">
          <FiTwitter size={26} color="#FFF" />
        </Link>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
