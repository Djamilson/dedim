import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  height: 100%;

  border: 0;
  justify-content: center;
  align-items: baseline;
  display: flex;
  margin-bottom: 100px;

  border: none;
  overflow: hidden;

  background: none;

  @media (max-width: 768px) {
    margin-top: 2600px;
    height: 2100px;
  }

  @media (min-width: 1024px) {
    margin-top: 2000px;
    height: 2000px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2600px;
    height: 2100px;
  }

  @media (max-width: 630px) {
    height: 2650px;
  }

  @media (max-width: 375px) {
    margin-top: 2900px;
    height: 2650px;
  }
`;

export const Content = styled.div`
  background: ${colors.colorPrimary};
  width: 400vw;
  height: 50%;
  padding: 10px;

  border: 0;
`;

export const HeaderContainer = styled.div`
  position: relative;
  justify-content: center;
  margin-left: 17px;
  padding: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (min-width: 768px) and (max-width: 960px) {
    margin-top: 50px;
  }

  @media (max-width: 375px) {
    padding: 20px;
  }
  ul {
    list-style: none;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 40rem 20rem;
      grid-gap: 20px;
    }

    li {
      display: flex;
      flex-direction: column;
      padding-top: 100px;

      section {
        background: #fff;
        padding-left: 40px;
        @media (max-width: 768px) {
          padding: 10px;
        }
        padding-top: 60px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        strong {
          margin-top: 0px;
          font-size: 18px;
          color: ${colors.colorTextTitle};
          text-align: center;

          @media (max-width: 768px) {
            margin-top: 50px;
          }
        }
        div {
          margin-top: 30px;
          margin-right: 30px;
          @media (max-width: 768px) {
            margin-right: 0;
          }
          border: none;
          h2 {
            border: 0;
            font-weight: bolder;
            color: ${colors.colorTextBase};
            font-size: 17px;
            margin-left: 0px;
            margin-bottom: 20px;
            @media (min-width: 960px) {
              padding-top: 40px;
            }
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

            @media (min-width: 960px) {
              padding-right: 40px;
            }
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

              @media (max-width: 768px) {
                padding-right: 30px;
              }
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
  height: 45vh;

  background: ${colors.colorBoxBase};

  padding-top: 20px;
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
    text-align: justify;
    color: ${colors.colorTextBase};
    font-family: 'Poppins', sans-serif;
    font: 300 1rem Poppins;
    font-style: italic;
  }
`;
