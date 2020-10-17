import React from 'react';

import backgroundImgCabeleireiro from '../../../assets/sign-in-background.png';
import { Container, HeaderContainer, HistoryAbout, About } from './styles';

const Section: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ul>
          <li>
            <HistoryAbout>
              <img
                src={backgroundImgCabeleireiro}
                alt="Cabeleireiro e Barbeiro no Bairro"
              />
            </HistoryAbout>
            <section>
              <article>
                <span>CABELEIREIRO E BARBEIRO NO BAIRRO</span>
                <strong>17 outubro de 2020</strong>
              </article>
            </section>
          </li>
          <li>
            <div>
              <About>
                <fieldset>
                  <legend>Sobre</legend>
                  <div>
                    <img
                      src={backgroundImgCabeleireiro}
                      alt="Cabeleireiro e Barbeiro no Bairro"
                    />
                  </div>
                </fieldset>
              </About>
            </div>
            <section>
              <article>
                <span>Minha informações</span>
                <p>
                  Sou Valto Rolim dos Santos, conhecido como Dedim Barbeiro.
                  Candidato a Vereador com o número 10.888.
                </p>
              </article>
            </section>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default Section;
