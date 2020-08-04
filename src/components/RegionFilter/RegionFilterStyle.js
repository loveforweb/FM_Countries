import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

export const DropdownToggle = styled(Dropdown)`
  width: 200px;
  margin-left: auto;

  button {
    color: inherit;
    background: ${({ theme }) => theme.white};
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
  }

  .dropdown-item {
    padding-bottom: 3px;
    color: inherit;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      background-color: #f8f9fa;
    }

    &.selected {
      background-color: #cacaca;

      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
`;
