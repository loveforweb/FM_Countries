import styled from 'styled-components';

export const SwitchButton = styled.button`
  color: inherit;
  transition: none;
  padding: 0;
  margin-top: -4px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: none;
  justify-content: flex-end;

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
