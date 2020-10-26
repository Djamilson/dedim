import styled from 'styled-components';

import backgroundImg from '../../assets/sign-in-background.png';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1100px;
  overflow: hidden;

  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) and (max-width: 960px) {
    margin: 0 auto;
    height: 1600px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    height: 1600px;
  }

  @media (max-width: 375px) {
    margin-top: 0px;
    height: 2100px;
  }


`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  position: relative;

  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

export const ProjectContainer = styled.div`
  padding-top: 0px;
  width: 100vw;
  flex: 1;
  margin: 100px auto;

  ul {
    border: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 960px) {
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

      img {
        width: 340px;
        height: 50vh;
        display: block;
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
