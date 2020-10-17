import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImgGabinete from '../../assets/download_.png';
import backgroundImgIncubadora from '../../assets/incubadora_.png';
import backgroundImgNovolar from '../../assets/novolar.png';
import backgroundImgCabeleireiro from '../../assets/sign-in-background.png';
import { Container, ProjectContainer } from './styles';

const Project: React.FC = () => {
  return (
    <Container>
      <ProjectContainer>
        <ul>
          <li>
            <div>
              <img
                style={{
                  width: '28vw',
                  height: '40vh',
                  marginLeft: '35px',
                }}
                src={backgroundImgCabeleireiro}
                alt="Cabeleireiro e Barbeiro no Bairro"
              />
            </div>
            <section
              style={{
                width: '28vw',
                marginLeft: '18px',
              }}
            >
              <article>
                <span>CABELEIREIRO E BARBEIRO NO BAIRRO</span>
                <strong>17 outubro de 2020</strong>
              </article>
            </section>
          </li>
          <li>
            <div>
              <img
                style={{
                  width: '28vw',
                  height: '40vh',
                  marginLeft: '0px',
                }}
                src={backgroundImgGabinete}
                alt="Gabinete do Bairro"
              />
            </div>
            <section>
              <article>
                <span>GABINETE DO BAIRRO</span>
                <strong>17 outubro de 2020</strong>
              </article>
            </section>
          </li>
          <li
            style={{
              width: '27vw',
              height: '40vh',
              marginLeft: '0px',
            }}
          >
            <div>
              <img
                style={{
                  width: '28vw',
                  height: '40vh',
                  marginLeft: '34px',
                }}
                src={backgroundImgNovolar}
                alt="Novo Lar"
              />
            </div>
            <section
              style={{
                width: '28vw',
                height: '40rem',
                marginLeft: '18px',
              }}
            >
              <article>
                <span>NOVO LAR</span>
                <strong>17 outubro de 2020</strong>
                <Link to="/">
                  <span> Projetos</span>
                </Link>
              </article>
            </section>
          </li>

          <li>
            <div>
              <img
                style={{
                  marginTop: '29px',
                  width: '28vw',
                  height: '45vh',
                  marginLeft: '0px',
                }}
                src={backgroundImgIncubadora}
                alt="INCUBADORA DE EMPREGOS"
              />
            </div>
            <section>
              <article>
                <span>INCUBADORA DE EMPREGOS</span>
                <strong>INCUBADORA DE EMPREGOS</strong>
                <Link to="/">
                  <span> Projetos</span>
                </Link>
              </article>
            </section>
          </li>
        </ul>
      </ProjectContainer>
    </Container>
  );
};

export default Project;
