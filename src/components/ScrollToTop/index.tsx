import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

import { Container } from './styles';

const ScrollToTop: React.FC = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  /*
  if (!visible) {
    return false;
  } */

  return (
    <Container className="cursor-pointer text-center" onClick={scrollToTop}>
      <i className="icon fas fa-chevron-up" />
    </Container>
  );
};

export default ScrollToTop;
