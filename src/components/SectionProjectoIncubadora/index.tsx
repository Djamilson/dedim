import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import backgroundImgIncubadora from '../../assets/incubadora_.png';
import { colors } from '../../styles';
import { Container, HeaderContainer, AboutText, About } from './styles';

const SectionProjectoIncubadora: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ul>
          <li>
            <section>
              <span>
                <span>ENCUBADORA DE EMPREGOS</span>
                <strong>17 outubro de 2020</strong>
              </span>

              <div>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender pessoas desempregadas da região e proporcionar o
                  acesso ao emprego com os auxílio dos empresários de Palmas.
                </p>
              </div>

              <aside>
                <span>
                  <h2>Objetivos Específico</h2>
                  <article>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Atender as pessoas que procuram empregos, e com
                      entrevistas, verificando o seu perfil e suas habilidades,
                      as quais serão encaminhadas para o emprego adequado e
                      empresas de Palmas.
                    </p>
                  </article>
                  <div>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Integrar as pessoas atendidas com seus respectivos
                      currículos, onde serão demonstrados suas habilidades,
                      elevar sua autoestima e pontuar seus pontos fortes,
                      entregando as empresas existentes em Palmas para as
                      contratações.
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
                  <img
                    src={backgroundImgIncubadora}
                    alt="ENCUBADORA DE EMPREGOS"
                  />
                </div>
              </fieldset>
            </About>
            <AboutText>
              <span>Minha informações</span>
              <p>ENCUBADORA DE EMPREGOS</p>
            </AboutText>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default SectionProjectoIncubadora;
