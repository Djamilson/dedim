import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100vw;
  height: 1450vh;
  border: none;
  left: 0;
  display: flex;
  align-items: initial;
  flex-direction: column;
  position: absolute;


 ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    background: red;
  `}

  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
    background: green;
  `}

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    background: blue;
  `}
`;

export const Section = styled.div`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const Sticky = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
