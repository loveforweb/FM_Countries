import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export const SwitchButton = styled(Button)`
  color: inherit;
  transition: none;
  padding: 0;
  margin-top: 2px;
  font-weight: 600;
  font-size: 16px;

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
