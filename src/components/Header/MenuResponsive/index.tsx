import React from 'react';

import { Container, OrderLI, NavigationButton } from './styles';

interface Props {
  isActive: boolean;
  handleToggleMenu(): void;
}

const MenuResponsive: React.FC<Props> = ({ handleToggleMenu, isActive }) => {
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
    <Container visible={Boolean(isActive)} className={isActive ? 'active' : ''}>
      <ul>
        <OrderLI>
          <NavigationButton type="button" onClick={gotoProjectSection}>
            <span>Projetos</span>
          </NavigationButton>
        </OrderLI>
        <OrderLI>
          <NavigationButton type="button" onClick={gotoProfileSection}>
            <span>Perfil</span>
          </NavigationButton>
        </OrderLI>
        <OrderLI>
          <NavigationButton type="button" onClick={gotoSection01}>
            <span>Cabeleireiro no Bairro</span>
          </NavigationButton>
        </OrderLI>
        <OrderLI>
          <NavigationButton type="button" onClick={gotoSection02}>
            <span>Gabinete do Bairro</span>
          </NavigationButton>
        </OrderLI>
        <OrderLI>
          <NavigationButton type="button" onClick={gotoSection03}>
            <span>Incubadora de Emprego</span>
          </NavigationButton>
        </OrderLI>
        <OrderLI>
          <NavigationButton type="button" onClick={gotoSection04}>
            <span>Novo lar</span>
          </NavigationButton>
        </OrderLI>
      </ul>
    </Container>
  );
};

export default MenuResponsive;
