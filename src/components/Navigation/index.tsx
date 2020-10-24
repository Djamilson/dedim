import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavigationLink, Navigation } from './styles';

interface Props {
  handleToggleMenu(): void;
}

const Navigationn: React.FC<Props> = (handleToggleMenu) => {
  const location = useLocation();

  /*
  function hendleIsActive(link) {
    return location.pathname.indexOf(link) ? '' : `active`;
  }
   className={hendleIsActive(menu.path)} */

  function hendleIsActivea(link: string) {
    return !location.pathname.indexOf(link);
  }

  return (
    <Navigation>
      <NavigationLink to="/" onClick={() => handleToggleMenu}>
        Testes
      </NavigationLink>
    </Navigation>
  );
};

export default Navigationn;
