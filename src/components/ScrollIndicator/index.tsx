import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

import { Container } from './styles';

const ScrollIndicator: React.FC = () => {
  const { y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);

  return (
    <Container>
      <div style={{ width: `${scrolled}%` }} />
    </Container>
  );
};

export default ScrollIndicator;
