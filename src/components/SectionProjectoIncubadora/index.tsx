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
              <strong>INCUBADORA DE EMPREGOS</strong>

              <div>
                <h2>Objetivo Geral do projeto</h2>
                <p>
                  Atender pessoas desempregadas da região e proporcionar o
                  acesso ao emprego com os auxílio dos empresários de Palmas.
                </p>
              </div>

              <aside>
                <h2>Objetivos Específico</h2>
                <article>
                  <FiArrowRight size={26} color={colors.colorTextBase} />
                  <p>
                    Atender as pessoas que procuram empregos, e com entrevistas,
                    verificando o seu perfil e suas habilidades, as quais serão
                    encaminhadas para o emprego adequado e empresas de Palmas;
                  </p>
                </article>
                <article>
                  <FiArrowRight size={26} color={colors.colorTextBase} />
                  <p>
                    Integrar as pessoas atendidas com seus respectivos
                    currículos, onde serão demonstrados suas habilidades, elevar
                    sua autoestima e pontuar seus pontos fortes, entregando as
                    empresas existentes em Palmas para as contratações.
                  </p>
                </article>
              </aside>

              <div>
                <h2>Quem pretende atingir</h2>
                <p>Pessoas desempregadas.</p>
              </div>

              <div>
                <h2>Como pretende realizar o projeto</h2>
                <p>
                  O escritório de encubadora de empregos terão profissionais
                  habilitados para análise do perfil das pessoas descobrindo
                  pontos fortes e habilidades de cada um.
                </p>
                <p>
                  Auxiliar na realização do currículo das pessoas, dando ênfase
                  nos seus pontos fortes, habilidades e direcionando para as
                  profissões de acordo com cada perfil.
                </p>
                <p>
                  Proporcionar palestras de como vestir no trabalho, como se
                  comportar, como respeitar o próximo, o que é e como funciona a
                  hierarquia dentro da empresa, etc... - Buscar juntamente com
                  os órgãos governamentais existentes capacitação para pessoas
                  cadastradas no projeto.
                </p>

                <p>
                  Buscar juntamente com os órgãos governamentais existentes
                  capacitação para pessoas cadastradas no projeto.
                </p>
              </div>

              <div>
                <h2>Como realizar integração com as empresas</h2>
                <p>
                  Serão realizados integração junto aos órgãos do governo (SINE)
                  e parcerias com empresas locais.
                </p>
              </div>

              <div>
                <h2>Onde será a base do projeto</h2>
                <p>Escritório na Região – Gabinete no Bairro</p>
              </div>

              <div>
                <h2>Como Pagar os profissionais do projeto</h2>
                <p>
                  Inicialmente serão por voluntários profissionais da sociedade
                  previamente acordados, pessoas que tenham o perfil e
                  conhecimento tais como: Administrador, psicólogos e ou
                  empresários para serem voluntários no projeto.
                </p>
              </div>

              <div>
                <h2>De onde vem o recurso?</h2>
                <p>
                  O recurso para custear as despesas com o escritório, o
                  pagamento do aluguel do móvel do Escritório e pagamento dos
                  salários dos profissionais (secretaria, atendente) que não
                  forem voluntários.
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
                    src={backgroundImgIncubadora}
                    alt="Incubadora de empregos"
                  />
                </div>
              </fieldset>
            </About>
            <AboutText>
              <span>Informações</span>
              <strong>Incubadora de empregos</strong>
            </AboutText>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default SectionProjectoIncubadora;
