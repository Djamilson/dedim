import { createGlobalStyle } from 'styled-components';

import { colors } from '.';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,100;1,300&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
  outline:0;
}

body{
 background: ${colors.colorBackground};
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
font-family: 'Poppins', sans-serif;
font-size: 14px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
}

#root{
  max-width: 1020px;
  margin: 0;
}
`;
