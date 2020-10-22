import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuContainer } from './styles';

const Menu: React.FC = (emailInputRef) => {
  const gotoProjectSection = () =>
    window.scrollTo({
      top: 1500,
      behavior: 'smooth',
    });

  const gotoProfileSection = () =>
    window.scrollTo({
      top: 2500,
      behavior: 'smooth',
    });

  const gotoSection01 = () =>
    window.scrollTo({
      top: 3300,
      behavior: 'smooth',
    });

  const gotoSection02 = () =>
    window.scrollTo({
      top: 4900,
      behavior: 'smooth',
    });

  const gotoSection03 = () =>
    window.scrollTo({
      top: 6300,
      behavior: 'smooth',
    });

  const gotoSection04 = () =>
    window.scrollTo({
      top: 8100,
      behavior: 'smooth',
    });

  return (
    <Container>
      <MenuContainer>
        <ul>
          <li>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={gotoProjectSection}
            >
              <span>Projetos</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={gotoProfileSection}
            >
              <span>Perfil</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={gotoSection01}
            >
              <span>Cabeleireiro no Bairro</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={gotoSection02}
            >
              <span>Gabinete do Bairro</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={gotoSection03}
            >
              <span>Incubadora de Emprego</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={gotoSection04}
            >
              <span>Novo lar</span>
            </button>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
