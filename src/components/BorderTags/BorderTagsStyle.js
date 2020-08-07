import { Link } from 'react-router-dom';
import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const CountryButton = styled(Link)`
  background-color: ${({ theme }) => theme.buttonBg};
  font-size: 14px;
  margin: 3px 11px 3px 0;
  padding: 3px 12px;
  width: auto;
  color: inherit;

  ${breakpoint.md`
    min-width: 100px;
    justify-content: center;
  `}

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.buttonHoverBg};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
