import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  height: 100vh;
  top: 10rem;
  border: 0;

  background: ${colors.colorPrimary};
`;

export const FooterContainer = styled.footer`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;

    li {
      list-style: none;

      font-size: 14px;

      a {
        text-decoration: none;
        color: ${colors.colorTextInPrimary};

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

export const Header = styled.div`
  margin-top: -2.8rem;
  color: ${colors.colorTextInPrimary};
`;

export const BoxLogin = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    align-items: center;
    justify-content: center;

    span {
      color: ${colors.colorTextInPrimary};
    }

    a {
      text-decoration: none;
      color: #ff9000;
      display: flex;

      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      span svg {
        color: #fff;
        margin-top: 5px;
        width: 20px;
        height: 20px;
        margin-left: 15px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
