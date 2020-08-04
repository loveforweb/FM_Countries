import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export const BackButtonWrapper = styled(Button)`
  color: inherit;
  box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 30%);
  padding: 2px 24px 3px 12px;
  width: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 81px;
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: 2px;
  transition: all 0.15s linear;

  svg {
    font-size: 33px;
    position: relative;
    left: 0;
    transition: all 0.15s ease-in-out;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
    background-color: ${({ theme }) => theme.buttonHoverBg};
    box-shadow: 0 0 3px 1px hsl(0deg 0% 0% / 30%);

    svg {
      left: -5px;
    }
  }
`;

export const IconWrapper = styled.div`
  margin-right: 3px;
`;
