import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Container, HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <a
          href="https://github.com/djamilson/iceberg-gatsby-multilang"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram size={26} color="#FFF" />
        </a>
        <a
          href="https://github.com/djamilson/iceberg-gatsby-multilang"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook size={26} color="#FFF" />
        </a>
        <a
          href="https://twitter.com/_djamilson"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size={26} color="#FFF" />
        </a>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
