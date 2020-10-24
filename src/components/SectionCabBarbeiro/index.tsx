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
              <strong>CABELEIREIRO E BARBEIRO NO BAIRRO</strong>

              <div>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender pessoas mais necessitadas, cadastradas nos benefícios
                  do governo e principalmente as impossibilitada de movimentar,
                  ou seja, as pessoasque tem dificuldade de sair de casa, e
                  pagar o corte de cabelo.
                </p>
              </div>

              <aside>
                <h2>Objetivos Específico</h2>
                <article>
                  <FiArrowRight size={26} color={colors.colorTextBase} />
                  <p>
                    Atender de forma especial a população mais necessitada dos
                    bairros com corte de cabelo;
                  </p>
                </article>
                <article>
                  <FiArrowRight size={26} color={colors.colorTextBase} />
                  <p>
                    Proporcionar autoestima nas pessoas com cortes de cabelo.
                  </p>
                </article>
              </aside>

              <div>
                <h2>Quem pretende atingir</h2>
                <p>
                  Pessoas que necessitam de corte de cabelo e que não tenham
                  condições de pagar.
                </p>
              </div>

              <div>
                <h2>Como pretende realizar o projeto</h2>
                <p>
                  Serão instalados em um veículo (VAN), cadeiras de barbeiro
                  para que sejam realizados os atendimentos dentro do veículo
                  pelos profissionais. Será disponibilizado calendário com as
                  dadas e região que serão atendidas as pessoas.
                </p>
              </div>

              <div>
                <h2>Como conseguir o veículo</h2>
                <p>
                  O veículo será inicialmente de aluguel, e posteriormente
                  poderá ser do próprio do projeto.
                </p>
              </div>

              <div>
                <h2>Onde será a base do projeto</h2>
                <p>Escritório na Região – Gabinete no Bairro</p>
              </div>

              <div>
                <h2>De onde vem o recurso?</h2>
                <p>
                  O recurso para custear as despesas com o escritório, o
                  pagamento do aluguel do veículo e o salário dos profissionais
                  (barbeiro e cabeleireiro) serão adquiridos por meio de emendas
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
                    src={backgroundImgCabeleireiro}
                    alt="Cabeleireiro e Barbeiro no Bairro"
                  />
                </div>
              </fieldset>
            </About>
            <AboutText>
              <span>Informações</span>
              <p>Cabeleireiro e Barbeiro no Bairro</p>
            </AboutText>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default SectionCabBarbeiro;
