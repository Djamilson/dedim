import React from 'react';

import backgroundImgCabeleireiro from '../../assets/33101.jpg';
import imgProfile from '../../assets/profile.jpg';
import { Container, HeaderContainer, HistoryAbout, About } from './styles';

const Perfil: React.FC = () => {
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
            <small>
              <article>
                <span>Crescimento e oportunidade</span>
                <div>
                  <strong>se faz com </strong>
                  <span>Gente de Verdade</span>
                </div>
              </article>
            </small>
          </li>
          <li>
            <div>
              <About>
                <fieldset>
                  <legend>Sobre</legend>
                  <div>
                    <img
                      src={imgProfile}
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

export default Perfil;
