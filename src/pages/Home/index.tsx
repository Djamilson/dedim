import React, { useState, useEffect } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Headers/Header';
import HeaderLogo from '../../components/Headers/HeaderLogo';
import Menu from '../../components/Headers/Menu';
import Perfil from '../../components/Perfil';
import Project from '../../components/Project';
import SectionCabBarbeiro from '../../components/SectionCabBarbeiro';
import SectionGabinete from '../../components/SectionGainete';
import SectionProjectoIncubadora from '../../components/SectionProjectoIncubadora';
import SectionProjectoNewLar from '../../components/SectionProjectoNewLar';
import { Container, Section, Sticky } from './styles';

const Home: React.FC = () => {
  const scrollPosition = window.pageYOffset;

  // If back to element (use Ref)
  const [s, setS] = useState(0);
  const [ss, setSs] = useState(s);

  function onClick() {
    alert('click');
    console.log('mmm', window.pageYOffset);
    setS(s + 150);
  }

  useEffect(() => {
    setSs(s);
  }, [s]);

  return (
    <Container>
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
