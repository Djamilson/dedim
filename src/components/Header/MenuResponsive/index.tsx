import React from 'react';

import { Container, OrderLI, NavigationButton } from './styles';

interface Props {
  isActive: boolean;
  handleToggleMenu(): void;
}

const MenuResponsive: React.FC<Props> = ({ handleToggleMenu, isActive }) => {
  const gotoProjectSection = () => {
    handleToggleMenu();
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  };

  const gotoProfileSection = () => {
    handleToggleMenu();
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    });
  };
  const gotoSection01 = () => {
    handleToggleMenu();
    window.scrollTo({
      top: 3200,
      behavior: 'smooth',
    });
  };
  const gotoSection02 = () => {
    handleToggleMenu();
    window.scrollTo({
      top: 5100,
      behavior: 'smooth',
    });
  };

  const gotoSection03 = () => {
    handleToggleMenu();
    window.scrollTo({
      top: 6800,
      behavior: 'smooth',
    });
  };

  const gotoSection04 = () => {
    handleToggleMenu();
    window.scrollTo({
      top: 9400,
      behavior: 'smooth',
    });
  };

  return (
    <Container visible={isActive}>
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
