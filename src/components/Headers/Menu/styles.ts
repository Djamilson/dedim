import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  max-width: 100vw;
  width: 100vw;
  height: 15vh;
  top: 0;
  border: 0;

  background: ${colors.colorPrimary};
`;

export const MenuContainer = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 30px;
    margin-bottom: 0px;
    border: 0;

    li {
      list-style: none;
      font-size: 14px;

      button {
        text-decoration: none;
        color: ${colors.colorTextInPrimary};
        background: none;
        border: none;
        span {
          font-size: 17px;
        }

        &:hover {
          color: #000;
        }
      }
    }

    li + li {
      margin-left: 40px;
    }
  }
`;
