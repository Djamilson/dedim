import React, { useMemo } from 'react';
import { FiPower, FiLogIn } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/dedim.png';
import { Container, HeaderContainer } from './styles';

const HeaderLogo: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <img src={logoImg} alt="Ecommecer" />
        <span>RENOVAÇÃO ACIMA DE TUDO E DEUS NO COMANDO</span>
      </HeaderContainer>
    </Container>
  );
};

export default HeaderLogo;
