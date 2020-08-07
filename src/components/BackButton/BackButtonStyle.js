import styled from 'styled-components';

export const BackButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  grid-column: 1 / -1;

  svg {
    font-size: 33px;
    position: relative;
    left: 0;
    transition: left 0.15s ease-in-out;
  }

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
  margin-right: 3px;
`;
