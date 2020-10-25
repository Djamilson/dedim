import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import backgroundImgnovolar from '../../assets/novolar.png';
import { colors } from '../../styles';
import {
  Container,
  Content,
  HeaderContainer,
  AboutText,
  About,
} from './styles';

const SectionProjectoIncubadora: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderContainer>
          <ul>
            <li>
              <section>
                <strong>NOVO LAR</strong>

                <div>
                  <h2>Objetivo Geral do projeto</h2>
                  <p>Auxiliar no transporte de sua MUDANÇA.</p>
                </div>

                <aside>
                  <h2>Objetivos Específico</h2>
                  <article>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Auxiliar no transporte de móveis e eletrodomésticospara
                      pessoas que necessitam de fazer MUDANÇA para um novo lar;
                    </p>
                  </article>
                  <article>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Arcar com os custos de mudança (caminhão) para o cidadão.
                    </p>
                  </article>
                </aside>

                <div>
                  <h2>Quem pretende atingir</h2>
                  <p>
                    Pessoas que necessitam de auxílio para a realização de
                    mudança que não tenham condições de realizar o pagamento do
                    transporte (caminhão). Inicialmente serão as pessoas que
                    possuem cadastros nos benefícios do governo federal.
                  </p>
                </div>

                <div>
                  <h2>Como pretende realizar o projeto</h2>
                  <p>
                    Serão realizados a disponibilidade de caminhão de acordo com
                    cadastros dos interessados no Escritório do projeto.
                  </p>
                </div>

                <div>
                  <h2>Como conseguir os caminhões</h2>
                  <p>
                    Os caminhões para a realização das MUDANÇAS, inicialmente
                    cadastrados com motoristas que residem na região para
                    atendimento do projeto.
                  </p>
                </div>

                <div>
                  <h2>Onde funcionar</h2>
                  <p>Escritório na Região</p>
                </div>

                <div>
                  <h2>De onde vem o recurso?</h2>
                  <p>
                    O recurso para custear as despesas com o escritório e o
                    pagamento dos caminhões serão adquiridos por meio de emendas
                    parlamentar.
                  </p>
                </div>
              </section>
            </li>
            <li>
              <About>
                <fieldset>
                  <legend>Sobre</legend>
                  <div>
                    <img
                      src={backgroundImgnovolar}
                      alt="Cabeleireiro e Barbeiro no Bairro"
                    />
                  </div>
                </fieldset>
              </About>
              <AboutText>
                <span>Informações</span>
                <strong>Projeto novo lar</strong>
              </AboutText>
            </li>
          </ul>
        </HeaderContainer>
      </Content>
    </Container>
  );
};

export default SectionProjectoIncubadora;
