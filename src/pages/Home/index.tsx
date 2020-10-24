import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Headers/Header';
import HeaderLogo from '../../components/Headers/HeaderLogo';
import Menu from '../../components/Header';
import Perfil from '../../components/Perfil';
import Project from '../../components/Project';
import ScrollIndicator from '../../components/ScrollIndicator';
import ScrollToTop from '../../components/ScrollToTop';
import SectionCabBarbeiro from '../../components/SectionCabBarbeiro';
import SectionGabinete from '../../components/SectionGainete';
import SectionProjectoIncubadora from '../../components/SectionProjectoIncubadora';
import SectionProjectoNewLar from '../../components/SectionProjectoNewLar';
import { Container, Section, Sticky } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollIndicator />
      <ScrollToTop />

      <Section
        style={{
          height: '20%',
        }}
      >
        <Sticky>
          <Header />
          <HeaderLogo />
          <Menu />
          <Project />
        </Sticky>
      </Section>
      <Section>
        <Sticky>
          <Perfil />
        </Sticky>
      </Section>
      <Section>
        <Sticky>
          <SectionCabBarbeiro />
        </Sticky>
      </Section>
      <Section>
        <Sticky>
          <SectionGabinete />
        </Sticky>
      </Section>
      <Section>
        <Sticky>
          <SectionProjectoIncubadora />
        </Sticky>
      </Section>
      <Section>
        <Sticky>
          <SectionProjectoNewLar />
        </Sticky>
      </Section>

      <Footer />
    </Container>
  );
};

export default Home;
