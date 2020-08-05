import styled from 'styled-components';

export const CountryCardContent = styled.div`
  background: ${({ theme }) => theme.cardsBg};
  box-shadow: 0px 0px 7px 0px ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.15s ease-in-out;
  opacity: 1;
  transform: scale(1);
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const CountryCardWrapper = styled.div`
  height: 100%;

  a {
    color: ${({ theme }) => theme.text};
    display: block;
    height: 100%;

    &:hover,
    &:focus {
      text-decoration: none;

      ${CountryCardContent} {
        opacity: 0.7;
        transform: scale(1.1);
      }
    }
  }
`;

export const CountrySummary = styled.div`
  padding: 26px 24px 40px;
`;

export const CountryName = styled.h2`
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 16px;
`;

export const CountryStatsList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    font-size: 14px;
    margin-bottom: 3px;
  }
`;
