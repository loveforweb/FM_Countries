import styled, { css } from 'styled-components';

import breakpoint from '../../utils/breakpoint';

const placeholderStyle = css`
  color: ${({ theme }) => theme.inputPlaceholderText};
`;
const focused = css`
  box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 30%);
`;

const notFocused = css`
  box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 9%);
`;

export const SearchWrapper = styled.div`
  ${({ searchFocused }) => (searchFocused ? focused : notFocused)};
  align-items: center;
  background: ${({ theme }) => theme.inputBg};
  border-radius: 4px;
  display: flex;
  height: 48px;
  padding-left: 28px;
  transition: all 0.15s linear;

  ${breakpoint.md`
    height: 55px;
  `}

  input {
    border: none;
    height: 100%;
    font-size: 12px;
    background: transparent;
    width: 100%;
    transition: background 0.15s linear;

    ${breakpoint.md`
    font-size: 14px;
  `}

    &::-webkit-input-placeholder {
      ${placeholderStyle}
    }

    &:-moz-placeholder {
      ${placeholderStyle}
    }

    &::-moz-placeholder {
      ${placeholderStyle}
    }

    &:-ms-input-placeholder {
      ${placeholderStyle}
    }

    &:focus {
      box-shadow: none;
      background: transparent;
      outline: 0;
    }
  }
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.inputPlaceholderText};
  font-size: 19px;
  margin-right: 11px;
  transition: color 0.15s linear;

  ${breakpoint.md`
    font-size: 23px;
  `}
`;
