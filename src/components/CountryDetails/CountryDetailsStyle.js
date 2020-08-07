import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const CountryDetailsWrapper = styled.div`
  margin-top: 43px;

  ${breakpoint.md`
    margin-top: 40px;
  `}
`;

export const Heading = styled.h2`
  font-size: 21px;
  font-weight: 800;
  margin-bottom: 23px;

  ${breakpoint.md`
    font-size: 32px;
    margin-bottom: 32px;
  `}
`;

export const CountryStatsList = styled.div`
  margin: 0;
  padding: 0;

  &:first-of-type {
    margin-right: 10px;
    margin-bottom: 30px;

    ${breakpoint.md`
      margin-bottom: 0;
    `}
  }

  > div {
    list-style: none;
    margin-bottom: 11px;
    font-size: 13.5px;

    ${breakpoint.md`
      font-size: 16px;
      margin-bottom: 8px;
    `}
  }
`;

export const CountryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;

  ${breakpoint.md`
    margin-bottom: 60px;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const BordersWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  ${breakpoint.md`
    flex-direction: row;
  `}

  span {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-right: 16px;
    font-size: 16px;
    min-width: 125px;
    margin-bottom: 10px;
  }
`;

export const BordersList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
