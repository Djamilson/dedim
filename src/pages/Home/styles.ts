import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 1450vh;
  border: none;
  left: 0;
  display: flex;
  align-items: initial;
  flex-direction: column;
  position: absolute;
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
