import React, { useMemo } from 'react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logo.svg';
import {
  Container,
  HeaderContainer,
  Cart,
  BoxLogin,
  ButtonLogout,
  BoxLogado,
} from './styles';

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
