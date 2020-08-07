import Dropdown from 'react-bootstrap/Dropdown';
import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const DropdownWrapper = styled(Dropdown)`
  width: 190px;

  ${breakpoint.md`
    width: 200px;
    grid-column-start: 3;
  `}

  button {
    color: inherit;
    background: ${({ theme }) => theme.inputBg};
    border-radius: 4px;
    box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 9%);
    height: 45px;
    font-size: 11.5px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 23px;
    width: 100%;
    transition: background 0.15s linear;

    ${breakpoint.md`
      height: 55px;
      font-size: 14px;
    `}

    &:after {
      display: none;
    }

    &:hover,
    &:focus,
    &:active {
      color: inherit;
      text-decoration: none;
      box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 30%);
    }

    svg {
      margin-right: -10px;

      ${breakpoint.md`
        margin-right: 0;
      `}
    }
  }

  .dropdown-menu {
    width: 100%;
    font-size: 14px;
    top: 4px !important;
    background-color: ${({ theme }) => theme.dropdownBg};
    color: ${({ theme }) => theme.text};
    padding-top: 6px;

    ${breakpoint.md`
      padding-top: 13px;
    `}
  }

  .dropdown-item {
    padding-bottom: 3px;
    color: inherit;
    font-size: 12px;
    padding-left: 22px;
    line-height: 1.4;

    ${breakpoint.md`
      font-size: 14px;
      padding-left: 1.5rem;
      line-height: 1.5;
    `}

    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.dropdownHoverText};
    }

    &:focus {
      background-color: #f8f9fa;
    }

    &.selected {
      background-color: #cacaca;
      color: ${({ theme }) => theme.dropdownHoverText};

      &:hover {
        background-color: #f8f9fa;
        color: ${({ theme }) => theme.dropdownHoverText};
      }
    }
  }
`;
