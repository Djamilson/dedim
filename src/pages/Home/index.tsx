import React from 'react';

import Description from '../../components/Headers/Descritpion';
import Header from '../../components/Headers/Header';
import HeaderLogo from '../../components/Headers/HeaderLogo';
import Menu from '../../components/Headers/Menu';
import Project from '../../components/Headers/Project';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeaderLogo />
      <Menu />
      <Project />
      <Description />
    </Container>
  );
};

export default Home;
