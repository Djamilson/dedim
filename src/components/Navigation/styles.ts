import { Link } from 'react-router-dom';

import styled from 'styled-components';
import media from 'styled-media-query';

export const Navigation = styled.ul`
  display: none;
  flex-direction: column;
  margin-top: var(--space-sm) var(--space-sm);
  &.active {
    display: flex;
  }
`;

export const NavigationLink = styled(Link)`
  color: '#444';

  position: relative;
  font-weight: bold;
  padding: 0 var(--space-sm);
  margin-bottom: var(--space-sm);
  text-align: center;

  ${media.greaterThan('medium')`
    margin-left: var(--space-sm);
    margin-bottom: 0;

  `}

  ${media.greaterThan('large')`
    margin-left: var(--space);

  `}

  &:after {
    ${media.greaterThan('medium')`
      content: '';
      display: inline-block;
      width: 0;
      height: 4px;

      background: var(--primary-color);
      position: absolute;
      left: 0;
      bottom: -10px;
      opacity: 0;

    `}
  }

  &.active {
    font-weight: bold;
    /*transform: translateY(-5px);*/

    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`;
