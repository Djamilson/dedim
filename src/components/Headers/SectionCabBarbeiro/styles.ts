import styled from 'styled-components';

import backgroundImg from '../../../assets/backgroundLogin.png';
import { colors } from '../../../styles';

export const Container = styled.div`
  position: relative;
  height: 100vh;

  margin-top: 20rem;
  background: none;
  border: 0;

  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const HeaderContainer = styled.div`
  justify-content: center;
  margin-left: 17px;
  padding: 100px;

  ul {
    margin-top: 7rem;
    border: 0;

    display: grid;
    grid-template-columns: 40rem 20rem;
    grid-gap: 20px;
    list-style: none;

    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;

    li {
      display: flex;
      flex-direction: column;

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

          padding: 30px;
          span {
            font-size: 18px;
            color: ${colors.colorTextTitle};
            text-align: center;
          }
          p {
            width: 100%;
            border: 0;
            text-align: justify;
            color: ${colors.colorTextBase};
            margin-top: 10px;
            margin-bottom: 6px;
            font-family: 'Poppins', sans-serif;
            font: 300 0.9rem Poppins;
            font-style: normal;
          }
        }
      }
    }
  }
`;

export const HistoryAbout = styled.div`
  height: 60vh;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100vw;
    height: 100vh;
  }
`;

export const About = styled.div`
  width: 100%;
  background: ${colors.colorBoxFooter};
  padding: 0 40px;
  fieldset {
    font-family: 'Poppins', sans-serif;
    border: 0;
    margin-top: 2rem;
    border-top: 2px solid ${colors.colorLineInWhite};

    div {
      align-items: center;
      justify-content: center;
      display: flex;
      width: 100%;
      height: 30vh;
      margin-bottom: 30px;
      img {
        width: 160px;
        height: auto;
        border-radius: 80px;
      }
    }

    legend {
      font-family: 'Poppins', sans-serif;
      font: 700 1rem Poppins;
      color: ${colors.colorTextTitle};
      text-align: center;
      margin-bottom: 1rem;
      display: flex;
      padding: 25px 10px 25px 10px;
      align-items: center;
      justify-content: center;
    }
  }
`;
