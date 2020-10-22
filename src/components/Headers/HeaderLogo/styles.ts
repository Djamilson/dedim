import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  width: 100vw;
  height: 40vh;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.colorPrimary};
  margin-top: 0rem;
  flex-direction: column;

  border-bottom: ${colors.colorTextInPrimary} solid 1px;

  > img {
    height: 1.5rem;
    margin-left: calc(50%) px;

    @media (min-width: 600px) {
      height: 1rem;
    }

    @media (min-width: 1100px) {
      height: 3rem;
      margin-left: calc(50%) px;
    }
  }
  span {
    display: block;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    margin-left: calc(50%) px;

    @media (max-width: 1100px) {
      height: 3rem;
      margin-left: calc(50%) px;
    }
  }
`;
