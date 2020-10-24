import styled from 'styled-components';

export const ButtonHamburger = styled.button`
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
        top: 0;
        left: 0;
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
    background: #000;
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
      background: #000;
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
`;
