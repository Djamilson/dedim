import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles';
export const Container = styled.button`
  background: ${colors.colorSecundary};
  border-radius: 7px;
  height: 46px;
  border: 0;
  padding: 10px 16px;
  width: 95%;
  color: ${colors.colorTitleInPrimary};
  font-weight: 5000;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  margin: 16px 0 16px 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, colors.colorSecundary)};
  }
`;
