import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  width: 100vw;
  height: 40vh;
  margin-left: 0rem;
  border-bottom: ${colors.colorTextInPrimary} solid 1px;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.colorPrimary};
  margin-top: 14.8rem;
  flex-direction: column;

  > img {
    height: 3rem;
  }
  span {
    display: block;

    width: 52px;
    height: 2.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }
`;
