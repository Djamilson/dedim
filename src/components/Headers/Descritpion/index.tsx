import React, { useMemo } from 'react';
import { FiPower, FiLogIn } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logo.svg';
import { Container, HeaderContainer } from './styles';

const Description: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <span>RENOVAÇÃO ACIMA DE TUDO E DEUS NO COMANDO</span>
      </HeaderContainer>
    </Container>
  );
};

export default Description;
