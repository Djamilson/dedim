import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  height: 30vh;
  border: 0;

  background: ${colors.colorPrimary};
  @media (min-width: 1100px) {
    margin-top: 5900px;
  }

  @media (min-width: 1024px) {
    margin-top: 10900px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: 7250px;
  }

  button {
    margin-top: 30px;
    margin-bottom: 30px;
    border: none;

    background: none;
    transition: background-color 0.2s;

    svg {
      &:hover {
        background: ${shade(0.2, colors.colorSecundary)};
        border-radius: 100%;
      }
    }
  }

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
