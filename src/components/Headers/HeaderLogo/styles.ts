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
    height: 3rem;
  }
  span {
    display: block;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }
`;
