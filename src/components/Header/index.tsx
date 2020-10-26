import React, { useState } from 'react';

import Menu from '../Headers/Menu';
import MenuResponsive from './MenuResponsive';
import { Container, Content, NavMenu } from './styles';

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Container>
      <MenuResponsive
        isActive={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />
      <Content>
        <>
          <button
            type="button"
            className={toggleMenu ? 'active' : ''}
            onClick={() => handleToggleMenu()}
          >
            <span />
          </button>
          <NavMenu>
            <Menu visible={toggleMenu} />
          </NavMenu>
        </>
      </Content>
    </Container>
  );
};

export default Header;
