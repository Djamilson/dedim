import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(80px);
  }

`;

interface Props {
  visible: boolean;
}

export const Container = styled.div<Props>`
  animation: ${(props) => (props.visible ? fadeOut : fadeIn)} 500ms linear;

  width: 100%;
  height: 95%;
  border: none;
  position: absolute;

  background: rgba(0, 0, 0, 0.6);

  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  justify-content: center;
  -ms-align-items: center;

  top: 63.6px;
  margin-right: calc(50% - 130px);
  z-index: 10;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  ul {
    z-index: 11;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2px;
    margin-top: 20px;
  }
`;

export const OrderLI = styled.li`
  margin-left: 10px;
  margin-bottom: 7px;
  padding: 5px;
  border-radius: 4px;
  background: #fff;

  max-width: 220px;
  transition: transform 0.3s ease-in-out;
  strong {
    display: block;
    color: #7159c1;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
  }
  &:hover,
  &.active {
    font-weight: bold;
    opacity: 0.6;
    transform: translateY(-5px);
    transition: all 0.2s;

    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`;

export const NavigationButton = styled.button`
  text-decoration: none;
  color: ${colors.colorTextTitle};
  background: none;
  border: none;

  position: relative;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 10px;

  background: none;
  border: none;

  border-radius: 4px;

  &:hover,
  &.active {
    font-weight: bold;
    opacity: 0.6;
    /* transform: translateY(-5px);*/
    transition: all 0.2s;
  }
`;
