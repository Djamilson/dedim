import { Link } from 'react-router-dom';

import { shade } from 'polished';
import styled from 'styled-components';

import backgroundImg from '../../../assets/backgroundLogin.png';
import { colors } from '../../../styles';

export const Container = styled.div`
  width: 100vw;
  height: 40vh;

  border-bottom: ${colors.colorTextInPrimary} solid 1px;
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
