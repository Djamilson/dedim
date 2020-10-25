import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  height: 30vh;

  background: ${colors.colorPrimary};

  @media (max-width: 768px) {
    margin-top: 8800px;
    height: 400px;
  }

  @media (min-width: 1024px) {
    margin-top: 7500px;
    height: 400px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 662px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 640px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 574px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 541px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 530px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 518px) {
    margin-top: 200px;
    height: 400px;
  }

  @media (max-width: 495px) {
    margin-top: 200px;
    height: 400px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
