import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { useViewportScroll } from 'framer-motion';

import { Container, MenuContainer } from './styles';

const Menu: React.FC = () => {
  const scrollPosition = window.pageYOffset;
  const { scrollY } = useViewportScroll();

  // If back to element (use Ref)
  const [s, setS] = useState(0);
  const [ss, setSs] = useState(s);

  function onClick() {
    alert('click');
    console.log('mmm', window.pageYOffset);
    setS(s + 150);

    console.log('scroll::', scrollY);
  }

  useEffect(() => {
    setSs(s);
  }, [s]);

  return (
    <Container>
      <MenuContainer>
        <ul>
          <li>
            <Link to="/">
              <span>Início</span>
            </Link>
            <button type="button">pp</button>
          </li>
          <li>
            <Link to="/">
              <span> Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span> Sobre </span>
            </Link>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
