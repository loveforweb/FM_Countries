import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const SwitchButton = styled.button`
  box-shadow: none;
  color: inherit;
  font-size: 12px;
  font-weight: 600;
  justify-content: flex-end;
  margin-top: -8px;
  padding: 0;
  transition: none;

  ${breakpoint.md`
    font-size: 16px;
    margin-top: -4px;
  `}

  span {
    margin-left: 9px;
  }

  svg {
    transform: rotate(-25deg);
  }

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: none;
    color: inherit;
    box-shadow: none;
  }
`;
