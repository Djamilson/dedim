import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import backgroundImgnovolar from '../../assets/novolar.png';
import { colors } from '../../styles';
import { Container, HeaderContainer, AboutText, About } from './styles';

const SectionProjectoNewLar: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ul>
          <li>
            <section>
              <span>
                <span>PROJETO NOVO LAR</span>
                <strong>17 outubro de 2020</strong>
              </span>

              <div>
                <h2>Objetivo Geral do projeto</h2>
                <p>Auxiliar no transporte de sua mudança.</p>
              </div>

              <aside>
                <span>
                  <h2>Objetivos Específico</h2>
                  <article>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Auxiliar no transporte de móveis e eletrodomésticospara
                      pessoas que necessitam de fazer MUDANÇA para um novo lar.
                    </p>
                  </article>
                  <div>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Arcar com os custos de mudança (caminhão) para o cidadão.
                    </p>
                  </div>
                </span>
              </aside>

              <article>
                <h2>Quem pretende atingir?</h2>
                <p>
                  Pessoas que necessitam de auxílio para a realização de mudança
                  que não tenham condições de realizar o pagamento do transporte
                  (caminhão). Inicialmente serão as pessoas que possuem
                  cadastros nos benefícios do governo federal.
                </p>
              </article>

              <section>
                <h2>Como pretende realizar o projeto</h2>
                <p>
                  Serão realizados a disponibilidade de caminhão de acordo com
                  cadastros dos interessados no Escritório do projeto
                </p>
              </section>
            </section>
          </li>
          <li>
            <About>
              <fieldset>
                <legend>Sobre</legend>
                <div>
                  <img src={backgroundImgnovolar} alt="PROJETO NOVO LAR" />
                </div>
              </fieldset>
            </About>
            <AboutText>
              <span>Minha informações</span>
              <p>PROJETO NOVO LAR</p>
            </AboutText>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default SectionProjectoNewLar;
