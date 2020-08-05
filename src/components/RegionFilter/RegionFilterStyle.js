import Dropdown from 'react-bootstrap/Dropdown';
import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const DropdownToggle = styled(Dropdown)`
  width: 200px;

  ${breakpoint.md`
    grid-column-start: 3;
  `}

  button {
    color: inherit;
    background: ${({ theme }) => theme.inputBg};
    border-radius: 4px;
    box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 9%);
    height: 55px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 23px;
    width: 100%;

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
  }

  .dropdown-menu {
    width: 100%;
    font-size: 14px;
    padding-top: 13px;
    top: 4px !important;
    background-color: ${({ theme }) => theme.dropdownBg};
    color: ${({ theme }) => theme.text};
  }

  .dropdown-item {
    padding-bottom: 3px;
    color: inherit;

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
