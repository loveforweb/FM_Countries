import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding-top: 25px;
  padding-bottom: 18px;
  box-shadow: 2px 4px 7px 3px ${({ theme }) => theme.headerShadow};
  background-color: ${({ theme }) => theme.headerBg};
  transition: all 0.15s linear;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 800;

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
