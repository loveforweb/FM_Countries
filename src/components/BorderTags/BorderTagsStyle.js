import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CountryButton = styled(Link)`
  background-color: ${({ theme }) => theme.buttonBg};
  font-size: 14px;
  margin: 3px 11px 3px 0;
  min-width: 96px;
  padding: 3px 12px;
  width: auto;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.buttonHoverBg};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
