import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  height: 100vh;

  margin-top: 10rem;
  background: none;
  border: 0;

  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  border: none;
`;

export const HeaderContainer = styled.div`
  justify-content: center;
  margin-left: 17px;
  border: none;
  margin-top: 5rem;
  ul {
    margin-top: 7rem;
    border: 0;

    display: grid;
    grid-template-columns: 40rem 20rem;
    grid-gap: 20px;
    list-style: none;

    background: none;

    li {
      display: flex;
      flex-direction: column;

      section {
        width: 100%;
        height: 125vh;
        background: #fff;
        border: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        margin-top: -7.2rem;

        padding: 40px 30px 20px 30px;
        border: 0;

        > span {
          position: absolute;
          top: 3rem;
          height: 20vh;
          border: 0;
          background: #fff;
          margin-top: 0rem;
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;

          padding: 30px;
          span {
            font-size: 18px;
            color: ${colors.colorTextTitle};
            text-align: center;

            margin-top: 3rem;
          }

          p {
            width: 100%;
            height: 100vh;
            border: 0;
            text-align: justify;
            color: ${colors.colorTextBase};
            margin-top: 0px;
            margin-bottom: 6px;
            font-family: 'Poppins', sans-serif;
            font: 300 0.9rem Poppins;
            font-style: normal;
          }
        }
        div {
          position: absolute;
          border: 0;
          margin-top: 20rem;
          padding: 10px 20px;
          width: 50vw;
          > h2 {
            border: 0;

            font-weight: bolder;
            color: ${colors.colorTextBase};
            font-size: 17px;
            margin-left: 0px;
            margin-bottom: 10px;
          }
          > p {
            width: 100%;
            height: 100vh;
            border: 0;
            text-align: justify;
            color: ${colors.colorTextBase};
            margin-top: 0px;
            margin-bottom: 0px;
            font-family: 'Poppins', sans-serif;
            font: 300 1rem Poppins;
            font-style: normal;
          }
        }

        aside {
          position: absolute;
          border: 0;
          margin-top: 35rem;
          padding: 10px 0px;

          background: none;
          width: 50%;
          height: 100vh;
          border: 0;

          span {
            h2 {
              border: 0;
              font-weight: bolder;
              color: ${colors.colorTextBase};
              font-size: 17px;
              margin-left: 20px;
              margin-bottom: 0px;
            }
            article {
              align-items: center;
              justify-content: center;
              display: flex;
              flex-direction: row;
              padding: 10px 2rem;
              svg {
                margin-top: 10px;
                margin-right: 30px;
              }
              p {
                width: 90%;
                height: 1vh;
                border: 0;
                text-align: justify;
                color: ${colors.colorTextBase};
                margin-top: 0px;
                margin-bottom: 0px;
                font-family: 'Poppins', sans-serif;
                font: 300 1rem Poppins;
                font-style: normal;
              }
            }

            div {
              position: absolute;
              align-items: center;
              justify-content: center;
              display: flex;
              flex-direction: row;
              padding: 10px 2rem;
              margin-top: -10px;
              svg {
                margin-top: 10px;
                margin-right: 30px;
              }
              p {
                width: 90%;
                height: 1vh;
                border: 0;
                text-align: justify;
                color: ${colors.colorTextBase};
                margin-top: 0px;
                margin-bottom: 0px;
                font-family: 'Poppins', sans-serif;
                font: 300 1rem Poppins;
                font-style: normal;
              }
            }
          }
        }

        > article {
          width: 100%;
          height: 10vh;

          border: 0;
          align-items: flex-start;
          justify-content: flex-start;
          display: flex;
          flex-direction: column;
          margin-top: 32rem;

          position: relative;
          > h2 {
            border: 0;
            font-weight: bolder;
            color: ${colors.colorTextBase};
            font-size: 17px;
            margin-left: 0px;
            margin-bottom: 15px;
          }

          p {
            width: 100%;
            height: 100vh;
            border: 0;
            text-align: justify;
            color: ${colors.colorTextBase};
            margin-top: 0px;
            margin-bottom: 6px;
            font-family: 'Poppins', sans-serif;
            font: 300 1rem Poppins;
            font-style: normal;
          }
        }
      }
    }
  }
`;

export const About = styled.div`
  margin-top: -115px;
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
      font: 700 1.4rem Poppins;
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

export const AboutText = styled.article`
  width: 100%;
  height: 25vh;

  background: ${colors.colorBoxBase};
  padding: 30px 50px;

  span {
    font-size: 18px;
    color: ${colors.colorTextTitle};
    text-align: center;
    margin-bottom: 10px;
  }
  > p {
    width: 100%;
    height: 100vh;
    border: 0;
    text-align: justify;
    color: ${colors.colorTextBase};
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Poppins', sans-serif;
    font: 300 1rem Poppins;
    font-style: italic;
  }
`;
