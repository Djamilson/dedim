import React from 'react';

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
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
