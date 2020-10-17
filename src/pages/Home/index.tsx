import React from 'react';

import Footer from '../../components/Headers/Footer';
import Header from '../../components/Headers/Header';
import HeaderLogo from '../../components/Headers/HeaderLogo';
import Menu from '../../components/Headers/Menu';
import Perfil from '../../components/Perfil';
import Project from '../../components/Project';
import SectionCabBarbeiro from '../../components/SectionCabBarbeiro';
import SectionGabinente from '../../components/SectionGabinente';
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
      <SectionProjectoNewLar />
      <SectionProjectoIncubadora />
      <SectionGabinente />

      <Footer />
    </Container>
  );
};

export default Home;
