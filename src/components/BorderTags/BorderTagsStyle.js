import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CountryButton = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: 2px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  color: inherit;
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin: 3px 11px 3px 0;
  min-width: 96px;
  padding: 3px 12px;
  text-align: center;
  width: auto;
  transition: none;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: inherit;
    background-color: ${({ theme }) => theme.buttonHoverBg};
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
