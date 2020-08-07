import styled, { css } from 'styled-components';

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
  align-items: center;
  background: ${({ theme }) => theme.inputBg};
  border-radius: 4px;
  display: flex;
  height: 55px;
  padding-left: 28px;
  ${({ searchFocused }) => (searchFocused ? focused : notFocused)};
  transition: all 0.15s linear;

  input {
    border: none;
    height: 100%;
    font-size: 14px;
    background: transparent;
    width: 100%;
    transition: background 0.15s linear;

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
  font-size: 23px;
  margin-right: 11px;
  transition: color 0.15s linear;
`;
