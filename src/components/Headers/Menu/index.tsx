import React from 'react';

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
      top: 2000,
      behavior: 'smooth',
    });

  const gotoSection01 = () =>
    window.scrollTo({
      top: 3200,
      behavior: 'smooth',
    });

  const gotoSection02 = () =>
    window.scrollTo({
      top: 5100,
      behavior: 'smooth',
    });

  const gotoSection03 = () =>
    window.scrollTo({
      top: 6800,
      behavior: 'smooth',
    });

  const gotoSection04 = () =>
    window.scrollTo({
      top: 9400,
      behavior: 'smooth',
    });

  return (
    <Container visible={visible}>
      <MenuContainer>
        <ul>
          <li>
            <button type="button" onClick={gotoProjectSection}>
              <span>Projetos</span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoProfileSection}>
              <span>Perfil</span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoSection01}>
              <span>Cabeleireiro no Bairro</span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoSection02}>
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
            <button type="button" onClick={gotoSection04}>
              <span>Novo lar</span>
            </button>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
