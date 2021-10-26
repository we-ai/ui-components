/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// extends React.Component<ButtonProps>
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isSelected?: boolean;
  borderRadius?: string;
}

function Button({
  children,
  className = '',
  isDisabled = false,
  isSelected = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${className}${isDisabled ? ' isDisabled ' : ''}${
        isSelected ? 'isSelected' : ''
      }`}
      {...rest}
      css={css`
        height: 32px;
        min-width: auto;
        box-sizing: border-box;
        background-color: #55a2eb;
        border: 1px solid blue;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        line-height: inherit;
        padding: 0 15px;
        &:hover {
          background-color: #4384c2;
          border: 1px solid #29e07b;
        }
        &:active {
          top: 5px;
          background-color: #316ca3;
        }
        &.isDisabled {
          background: none;
          cursor: not-allowed;
          box-shadow: none;
          color: #bdb8b8;
        }
        &.isSelected {
          background-color: #52be37;
          border: 1px solid #220f8b;
        }
      `}
    >
      {children}
    </button>
  );
}

export default Button;
