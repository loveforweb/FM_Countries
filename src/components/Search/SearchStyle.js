import styled, { css } from 'styled-components';

const placeholderStyle = css`
  color: hsl(0deg 0% 0% / 30%);
`;
const focused = css`
  box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 30%);
`;

const notFocused = css`
  box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 9%);
`;

export const SearchWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  // box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 9%);
  display: flex;
  height: 55px;
  margin-bottom: 48px;
  margin-right: 40px;
  padding-left: 28px;
  ${({ searchFocused }) => (searchFocused ? focused : notFocused)};
  transition: box-shadow 0.15s linear;

  input {
    border: none;
    height: 100%;
    font-size: 14px;

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
    }
  }
`;

export const SearchIcon = styled.div`
  color: hsl(0deg 0% 0% / 30%);
  font-size: 23px;
  margin-right: 11px;
`;
