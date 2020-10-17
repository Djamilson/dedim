import React from 'react';

import logoImg from '../../../assets/dedim_barbeiro.png';
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
