import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding-top: 31px;
  padding-bottom: 22px;
  box-shadow: 2px 4px 7px 3px ${({ theme }) => theme.headerShadow};
  background-color: ${({ theme }) => theme.headerBg};
  transition: all 0.15s linear;

  ${breakpoint.md`
    padding-top: 25px;
    padding-bottom: 18px;
  `}
`;

export const Heading = styled.h1`
  font-size: 14px;
  font-weight: 800;

  ${breakpoint.md`
    font-size: 24px;
  `}

  a {
    color: inherit;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
