import React from 'react';

import backgroundImgGabinete from '../../../assets/download_.png';
import backgroundImgIncubadora from '../../../assets/incubadora_.png';
import backgroundImgNovolar from '../../../assets/novolar.png';
import backgroundImgCabeleireiro from '../../../assets/sign-in-background.png';
import { Container, HeaderContainer, HistoryAbout, About } from './styles';

const SectionCabBarbeiro: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ul>
          <li>
            <HistoryAbout>
              <h1>mmdfjkjkjkjkj</h1>
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
                <p>Cabeleireiro e Barbeiro no Bairro</p>
              </article>
            </section>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default SectionCabBarbeiro;
