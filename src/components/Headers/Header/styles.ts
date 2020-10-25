import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  max-width: 100vw;
  width: 100vw;
  height: 15vh;
  top: 0rem;
  border: 0;

  background: ${colors.colorPrimaryDarker};
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  a {
    > img {
      height: 2rem;
      @media (max-width: 600px) {
        margin-left: 60px;
      }
    }
  }
  a + a {
    margin-left: 20px;
  }
`;

export const Header = styled.div`
  margin-top: -2.8rem;
  color: ${colors.colorTextInPrimary};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
