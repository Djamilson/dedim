import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import backgroundImgCabeleireiro from '../../assets/sign-in-background.png';
import { colors } from '../../styles';
import { Container, HeaderContainer, AboutText, About } from './styles';

const SectionCabBarbeiro: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ul>
          <li>
            <section>
              <span>
                <span>CABELEIREIRO E BARBEIRO NO BAIRRO</span>
                <strong>17 outubro de 2020</strong>
              </span>

              <div>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender pessoas mais necessitadas, cadastradas nos benefícios
                  do governo e principalmente as impossibilitada de movimentar,
                  ou seja, as pessoas que tem dificuldade de sair de casa, e
                  pagar o corte de cabelo.
                </p>
              </div>

              <aside>
                <span>
                  <h2>Objetivos Específico</h2>
                  <article>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Atender de forma especial a população mais necessitada dos
                      bairros com corte de cabelo;
                    </p>
                  </article>
                  <div>
                    <FiArrowRight size={26} color={colors.colorTextBase} />
                    <p>
                      Proporcionar autoestima nas pessoas com cortes de cabelo.
                    </p>
                  </div>
                </span>
              </aside>

              <article>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender pessoas mais necessitadas, cadastradas nos benefícios
                  do governo e principalmente as impossibilitada de movimentar,
                  ou seja, as pessoasque tem dificuldade de sair de casa, e
                  pagar o corte de cabelo.
                </p>
              </article>

              <section>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender pessoas mais necessitadas, cadastradas nos benefícios
                  do governo e principalmente as impossibilitada de movimentar,
                  ou seja, as pessoasque tem dificuldade de sair de casa, e
                  pagar o corte de cabelo.
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
                    src={backgroundImgCabeleireiro}
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

export default SectionCabBarbeiro;
