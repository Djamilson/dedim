import React from 'react';

import Footer from '../../components/Headers/Footer';
import Header from '../../components/Headers/Header';
import HeaderLogo from '../../components/Headers/HeaderLogo';
import Menu from '../../components/Headers/Menu';
import Perfil from '../../components/Perfil';
import Project from '../../components/Project';
import SectionCabBarbeiro from '../../components/SectionCabBarbeiro';
import SectionGabinete from '../../components/SectionGainete';
import SectionProjectoIncubadora from '../../components/SectionProjectoIncubadora';
import SectionProjectoNewLar from '../../components/SectionProjectoNewLar';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeaderLogo />
      <Menu />
      <Project />
      <Perfil />
      <SectionCabBarbeiro />
      <SectionGabinete />
      <SectionProjectoIncubadora />
      <SectionProjectoNewLar />

      <Footer />
    </Container>
  );
};

export default Home;
