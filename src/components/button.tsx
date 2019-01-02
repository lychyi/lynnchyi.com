import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
}
const btnColor = `#137F4E`;
const btnLabelColor = `#FFFFFF`;
const btnHoverColor = `#106940`;

const Button: React.SFC<ButtonProps> = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Sarabun';
  white-space: nowrap;
  color: ${btnLabelColor};
  font-weight: 800;
  font-size: 16px;
  background-color: ${btnColor};
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
  box-shadow: 0 3px 8px 0 rgba(9, 6, 38, 0.22);
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:hover {
    background-color: ${btnHoverColor};
    box-shadow: 0 3px 16px 0 rgba(9, 6, 38, 0.32);
    transition: all 0.2s ease-in-out;
  }

  &:active {
    box-shadow: none;
    transition: all 0.1s ease-in-out;
  }
`;

export default Button;