import styled from 'styled-components';

import { colors } from '../../../styles';

interface Props {
  visible: boolean;
}

export const Container = styled.div<Props>`
  max-width: 100vw;
  width: 80vw;
  height: 10vh;
  margin-left: 50px;
  top: 0;
  border: 0;

  background: none;
  display: ${(props) => (props.visible ? 'none' : 'block')};
`;

export const MenuContainer = styled.div`
  margin-top: 20px;
  overflow: hidden;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 0px;
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
