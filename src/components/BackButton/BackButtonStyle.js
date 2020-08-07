import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const BackButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  grid-column: 1 / -1;
  width: 102px;
  font-size: 14px;
  padding-top: 4px;
  padding-left: 17px;
  align-items: baseline;
  margin-bottom: 56px;
  color: inherit;

  ${breakpoint.md`
    width: 135px;
    font-size: 16px;
    margin-bottom: 0;
  `}

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.buttonHoverBg};

    svg {
      left: -5px;
    }
  }
`;

export const IconWrapper = styled.div`
  margin-right: 4px;

  ${breakpoint.md`
  margin-left: 7px;
  `}

  svg {
    font-size: 28px;
    position: relative;
    left: 0;
    transition: left 0.15s ease-in-out;

    ${breakpoint.md`
      font-size: 33px;
    `}
  }
`;
