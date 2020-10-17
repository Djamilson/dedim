import React from 'react';

import Description from '../../components/Headers/Descritpion';
import Footer from '../../components/Headers/Footer';
import Header from '../../components/Headers/Header';
import HeaderLogo from '../../components/Headers/HeaderLogo';
import Menu from '../../components/Headers/Menu';
import Project from '../../components/Headers/Project';
import SectionCabBarbeiro from '../../components/Headers/SectionCabBarbeiro';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeaderLogo />
      <Menu />
      <Project />
      <Description />
      <SectionCabBarbeiro />
      <Footer />
    </Container>
  );
};

export default Home;
