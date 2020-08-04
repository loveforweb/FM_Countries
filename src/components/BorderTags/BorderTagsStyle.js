import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BordersWrapper = styled.div`
  display: flex;
  margin-top: 63px;
  align-items: baseline;

  span {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-right: 16px;
    font-size: 16px;
    width: 150px;
  }
`;

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
  transition: all 0.15s linear;

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

export const BordersList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
