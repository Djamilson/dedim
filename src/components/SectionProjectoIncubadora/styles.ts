import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  height: 100%;

  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 100px;

  border: none;
  background: ${colors.colorPrimary};

  @media (min-width: 1100px) {
    margin-top: 3500px;
  }
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
      padding-top: 1100px;

      section {
        background: #fff;
        padding-left: 40px;

        padding-top: 60px;
        strong {
          margin-top: 0px;
          font-size: 18px;
          color: ${colors.colorTextTitle};
          text-align: center;
          margin-left: 100px;
        }

        div {
          margin-top: 30px;
          margin-right: 30px;

          border: none;
          h2 {
            border: 0;
            font-weight: bolder;
            color: ${colors.colorTextBase};
            font-size: 17px;
            margin-left: 0px;
            margin-bottom: 20px;
          }

          p {
            width: 100%;
            border: 0;
            text-align: justify;
            color: ${colors.colorTextBase};

            margin-bottom: 0px;
            font-family: 'Poppins', sans-serif;
            font: 300 1rem Poppins;
            font-style: normal;
          }

          p + p {
            margin-top: 20px;
          }
        }

        aside {
          padding-top: 40px;
          h2 {
            border: 0;
            font-weight: bolder;
            color: ${colors.colorTextBase};
            font-size: 17px;
            margin-left: 0px;
            margin-bottom: 10px;
          }
          article {
            margin-top: 20px;

            p {
              margin-top: -25px;
              margin-left: 35px;
              width: 90%;
              border: 0;
              text-align: justify;
              color: ${colors.colorTextBase};

              font-family: 'Poppins', sans-serif;
              font: 300 1rem Poppins;
              font-style: normal;
            }
          }
          article + article {
            margin-top: 30px;
          }
        }

        aside + div {
          margin-top: 60px;
        }

        div {
          padding-bottom: 30px;
        }
      }
    }
  }
`;

export const About = styled.div`
  margin-top: 0px;
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
  padding: 30px 0px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 18px;
    color: ${colors.colorTextTitle};
    text-align: center;
    margin-bottom: 10px;
  }

  strong {
    border: 0;
    text-align: justify;
    color: ${colors.colorTextBase};

    font-family: 'Poppins', sans-serif;
    font: 300 1rem Poppins;
    font-style: italic;
  }
`;
