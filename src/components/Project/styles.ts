import styled from 'styled-components';

import backgroundImg from '../../assets/sign-in-background.png';
import { colors } from '../../styles';

export const Container = styled.div`
  max-width: 100vw;
  height: 100%;
  top: 0;
  border: 0;

  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

export const ProjectContainer = styled.div`
  ul {
    border: 0;
    padding: 0 16rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 0 8rem;
      margin-left: 40px;
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 0 8rem;
      margin-left: 40px;
    }

    li {
      display: flex;
      flex-direction: column;
      background: none;

      margin-top: 15%;

      img {
        width: 100%;
        height: 40vh;
      }

      section {
        width: 100%;
        height: 25vh;
        background: #fff;

        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        span {
          font-size: 18px;
          color: ${colors.colorTextTitle};
          text-align: center;
        }
        strong {
          color: ${colors.colorTextInWhite};
          margin-top: 6px;
          margin-bottom: 6px;
          font-family: 'Poppins', sans-serif;
          font: 300 0.9rem Poppins;
          font-style: italic;
        }
      }
    }

    li + li {
      margin-left: 7px;
    }
  }
`;
