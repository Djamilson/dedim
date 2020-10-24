import React from 'react';

import MenuRespancive from '../../Header';
import { Container, MenuContainer } from './styles';

interface Props {
  visible: boolean;
}

const Menu: React.FC<Props> = ({ visible }) => {
  const gotoProjectSection = () =>
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });

  const gotoProfileSection = () =>
    window.scrollTo({
      top: 1800,
      behavior: 'smooth',
    });

  const gotoSection01 = () =>
    window.scrollTo({
      top: 2700,
      behavior: 'smooth',
    });

  const gotoSection02 = () =>
    window.scrollTo({
      top: 4400,
      behavior: 'smooth',
    });

  const gotoSection03 = () =>
    window.scrollTo({
      top: 5900,
      behavior: 'smooth',
    });

  const gotoSection04 = () =>
    window.scrollTo({
      top: 8000,
      behavior: 'smooth',
    });

  return (
    <Container visible={visible}>
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
