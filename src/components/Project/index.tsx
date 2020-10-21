import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImgGabinete from '../../assets/download_.png';
import backgroundImgIncubadora from '../../assets/incubadora_.png';
import backgroundImgNovolar from '../../assets/novolar.png';
import backgroundImgCabeleireiro from '../../assets/sign-in-background.png';
import { Container, ProjectContainer } from './styles';

import {} from 'framer-motion';

const Project: React.FC = () => {
  return (
    <Container>
      <ProjectContainer>
        <ul>
          <li>
            <img
              src={backgroundImgCabeleireiro}
              alt="Cabeleireiro e Barbeiro no Bairro"
            />
            <section>
              <span>CABELEIREIRO E BARBEIRO NO BAIRRO</span>
              <strong>17 outubro de 2020</strong>
            </section>
          </li>

          <li>
            <img src={backgroundImgGabinete} alt="Gabinete do Bairro" />
            <section>
              <span>GABINETE DO BAIRRO</span>
              <strong>17 outubro de 2020</strong>
            </section>
          </li>

          <li>
            <img src={backgroundImgNovolar} alt="Novo Lar" />
            <section>
              <span>NOVO LAR</span>
              <strong>17 outubro de 2020</strong>
            </section>
          </li>

          <li>
            <img src={backgroundImgIncubadora} alt="INCUBADORA DE EMPREGOS" />
            <section>
              <span>INCUBADORA DE EMPREGOS</span>
              <strong>INCUBADORA DE EMPREGOS</strong>
            </section>
          </li>
        </ul>
      </ProjectContainer>
    </Container>
  );
};

export default Project;
