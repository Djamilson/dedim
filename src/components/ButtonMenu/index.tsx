import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
  handleClick(): void;
};

const ButtonMenu: React.FC<ButtonProps> = ({
  children,
  handleClick,
  isActive,
  ...rest
}) => {
  console.log('Estou no button::', handleClick);
  console.log('Estou no button::', isActive);
  return (
    <S.ButtonHamburger
      {...rest}
      onClick={() => handleClick}
      className={isActive ? 'active' : ''}
    >
      <span />
    </S.ButtonHamburger>
  );
};

export default ButtonMenu;
