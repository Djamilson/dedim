import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import backgroundImgGabinete from '../../assets/gabinete.png';
import { colors } from '../../styles';
import { Container, HeaderContainer, AboutText, About } from './styles';

const SectionGabinete: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ul>
          <li>
            <section>
              <strong>GABINETE DO BAIRRO</strong>

              <div>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender as demandas dos Presidentes dos bairros e população em
                  geral em ambiente adequado.
                </p>
              </div>

              <aside>
                <h2>Objetivos Específico</h2>
                <article>
                  <FiArrowRight size={26} color={colors.colorTextBase} />
                  <p>
                    Local adequado para receber as pessoas que necessitam de
                    auxílio sejam específicos, setoriais ou de quadras;
                  </p>
                </article>
                <article>
                  <FiArrowRight size={26} color={colors.colorTextBase} />
                  <p>
                    Auxiliar a sociedade na recepção das demandas sejam urgentes
                    ou não com objetivo de melhoria para a coletividade.
                  </p>
                </article>
              </aside>

              <div>
                <h2>Quem pretende atingir</h2>
                <p>
                  Lideres de bairros, pessoas que envolvem em projetos sociais e
                  sociedade em geral.
                </p>
              </div>

              <div>
                <h2>Como pretende realizar o projeto</h2>
                <p>Em local adequado, ambiente favorável receber as pessoas.</p>
              </div>

              <div>
                <h2>Onde funcionar</h2>
                <p>Escritório na Região</p>
              </div>

              <div>
                <h2>De onde vem o recurso?</h2>
                <p>
                  O recurso para custear as despesas do gabinete do bairro será
                  adquirido por meio de emendas parlamentar.
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
                    src={backgroundImgGabinete}
                    alt="Cabeleireiro e Barbeiro no Bairro"
                  />
                </div>
              </fieldset>
            </About>
            <AboutText>
              <span>Minha informações</span>
              <p>Cabeleireiro e Barbeiro no Bairro</p>
            </AboutText>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default SectionGabinete;
