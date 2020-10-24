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
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1100px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 16rem;
      grid-gap: 20px;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: none;

      max-width: 340px;
      margin-top: 5%;

      @media (min-width: 1100px) {
        margin-top: 15%;
      }

      img {
        width: 340px;
        height: 50vh;
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
