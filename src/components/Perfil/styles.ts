import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  background: none;

  justify-content: center;
  align-items: baseline;
  display: flex;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 1600px;
    height: 1200px;
  }

  @media (min-width: 960px) {
    margin-top: 1300px;
    height: 1000px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 1500px;
    height: 1300px;
  }

  @media (max-width: 360px) {
    margin-top: 2000px;
    height: 2100px;
  }
`;

export const Content = styled.div`
  background: ${colors.colorPrimary};
  width: 400vw;
  height: 50%;

  border: 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 100px 40px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 auto;
    padding: 100px;
  }

  @media (max-width: 360px) {
    padding: 20px;
  }

  ul {
    border: 0;
    display: grid;
    grid-template-columns: 40rem 20rem;
    grid-gap: 20px;
    list-style: none;
    margin-top: 150px;

    @media (max-width: 768px) {
      /* screen width is less than 768px (medium) */
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-top: 0px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      margin-top: 0px;
    }

    li {
      height: 420px;

      > img {
        width: 100%;
        height: calc(100%);
        @media (min-width: 768px) and (max-width: 1023.9px) {
          width: 86%;
          max-width: 690px;
          max-height: 480px;
          height: auto;
          margin-left: 52.4px;
        }

        @media (max-width: 360px) {
          height: 300px;
        }
      }
      > div {
        margin-top: 0px;

        @media (max-width: 768px) {
          margin-top: 215px;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          margin-top: 215px;
        }
      }
      > section {
        width: 100%;
        height: 40vh;
        background: #fff;

        @media (min-width: 768px) and (max-width: 1024px) {
          margin: 0 auto;
          max-width: 640px;
        }

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

      article {
        width: 100%;
        height: 20vh;
        background: #fff;

        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;

        padding: 80px 30px;
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

    li + li {
      @media (min-width: 960px) {
        margin-top: 50px;
      }

      @media (max-width: 360px) {
        margin-top: 50px;
        height: 2100px;
      }
    }
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
