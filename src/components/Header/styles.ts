import { Link } from 'react-router-dom';

import styled from 'styled-components';
import media from 'styled-media-query';

import { colors, fonts } from '../../styles';

export const Container = styled.div`
  background: ${colors.colorPrimary};

  width: 100%;
  padding-left: 20px;
`;

export const ProlifeLink = styled(Link)`
  display: none;

  ${media.greaterThan('medium')`
  display: flex;
`}

  ${media.greaterThan('small')`
  display: flex;
`}
`;

export const NavLink = styled(Link)`
  display: none;
  padding-right: 20px;
  margin-left: 50px;
  margin-top: 5px;

  ${media.greaterThan('medium')`
      display: flex;
    `}

  ${media.greaterThan('small')`
    display: flex;
  `}
`;

export const Content = styled.div`
  display: none;

  height: 64px;
  max-width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    z-index: 9999;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    border: none;
    position: relative;
    background: transparent;
    display: inline-block;

    top: 0;
    left: 0;

    &.active {
      span {
        background: transparent;

        &:before,
        &:after {
          top: -118px;
          left: 220px;
        }
        &:before {
          transform: rotate(-45deg);
        }
        &:after {
          transform: rotate(45deg);
        }
      }
    }

    span {
      background: ${colors.colorSecundary};
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &:before,
      &:after {
        content: '';
        background: ${colors.colorSecundary};

        border-radius: 10px;
        display: inline-block;
        height: 3px;
        width: 100%;
        position: absolute;
        left: 0;
        transition: 0.3s;
      }

      &:before {
        top: -10px;
      }

      &:after {
        bottom: -10px;
      }
    }

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 960px) {
      display: none;
    }
  }

  nav {
    display: none;
    align-items: center;

    margin-right: var(--space-lg);

    ${media.greaterThan('medium')`
    margin-left: 50px;
    margin-left:  var(--space-lg);

    display: flex;
  `}

    ${media.greaterThan('small')`
    display: flex;
    margin-left: 50px;
  `}




     img {
      display: none;
      margin-right: 20px;
      padding-right: 20px;
      height: 25px;
      border-right: 1px solid #eee;

      ${media.greaterThan('medium')`
        display: flex;
        `}

      ${media.greaterThan('small')`
        display: flex;
        `}
    }

    a {
      font-weight: bold;
      color: #7159c1;

      @media (max-width: 370px) {
        display: none;
      }
    }

    &:hover a {
      opacity: 0.4;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 500px) {
    display: none;
  }

  strong {
    display: block;
    color: ${colors.colorBoxBase};
    font-size: ${fonts.smaller}px;
    font-weight: bold;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  width: 100%;
  display: inline-block;
  margin: 0.5em;
  color: #fff;
  font-size: ${fonts.small}px;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  display: none;

  @media (min-width: 960px) {
    display: block;
  }
`;
