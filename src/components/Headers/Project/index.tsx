import React, { useMemo } from 'react';
import { FiPower, FiLogIn } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import backgroundImgGabinete from '../../../assets/download_.png';
import logoImg from '../../../assets/images/logo.svg';
import backgroundImgIncubadora from '../../../assets/incubadora_.png';
import backgroundImgNovolar from '../../../assets/novolar.png';
import backgroundImgCabeleireiro from '../../../assets/sign-in-background.png';
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
                  width: '30.85vw',
                  height: '40vh',
                  marginLeft: '35px',
                }}
                src={backgroundImgCabeleireiro}
                alt="Cabeleireiro e Barbeiro no Bairro"
              />
            </div>
            <section>
              <article>
                <span>CABELEIREIRO E BARBEIRO NO BAIRRO</span>
              </article>
            </section>
          </li>
          <li>
            <div>
              <img
                style={{
                  width: '27.9vw',
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
              </article>
            </section>
          </li>
          <li
            style={{
              width: '30.9vw',
              height: '40vh',
              marginLeft: '-1px',
            }}
          >
            <div>
              <img
                style={{
                  width: '30.9vw',
                  height: '40vh',
                  marginLeft: '34px',
                }}
                src={backgroundImgNovolar}
                alt="Novo Lar"
              />
            </div>
            <section
              style={{
                width: '30.9vw',
                height: '40rem',
              }}
            >
              <article>
                <span>NOVO LAR</span>
                <strong>NOVO LAR</strong>
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
                  width: '27vw',
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
