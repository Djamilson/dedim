import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  height: 100%;

  margin-top: 0;
  background: ${colors.colorPrimary};
  border: 0;

  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (min-width: 1024px) {
    margin-top: 1500px;
  }
`;

export const HeaderContainer = styled.div`
  justify-content: center;
  margin-left: 17px;
  padding: 100px;

  @media (min-width: 1024px) {
    margin-top: 250px;
  }

  ul {
    border: 0;
    display: grid;
    grid-template-columns: 40rem 20rem;
    grid-gap: 20px;
    list-style: none;
    margin-top: 0px;

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-top: 450px;
    }

    li {
      height: 420px;

      > img {
        width: 640px;
        height: 400px;
      }
      > div {
        margin-top: 115px;
      }
      > section {
        width: 100%;
        height: 30vh;
        background: #fff;

        @media (min-width: 1024px) {
          width: 640px;
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
      @media (min-width: 1024px) {
        margin-top: 50px;
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
