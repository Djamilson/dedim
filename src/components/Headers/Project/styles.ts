import styled from 'styled-components';

import backgroundImg from '../../../assets/sign-in-background.png';
import { colors } from '../../../styles';

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  top: 0rem;
  border: 0;

  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

export const ProjectContainer = styled.div`
  ul {
    margin-top: 20px;
    border: 0;

    padding: 0 16rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      background: none;

      div {
        width: 28vw;
        height: 40vh;
        background: none;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 26.8vw;
          height: 40vh;
        }
      }
      section {
        width: 100%;
        height: 25vh;
        background: #fff;

        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        article {
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
      }
    }

    li + li {
      margin-left: 7px;
    }
  }
`;
