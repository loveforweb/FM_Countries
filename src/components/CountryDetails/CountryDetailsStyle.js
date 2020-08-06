import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const CountryDetailsWrapper = styled.div`
  margin-top: 40px;
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const CountryStatsList = styled.div`
  margin: 0;
  padding: 0;

  &:first-of-type {
    margin-right: 10px;
  }

  > div {
    list-style: none;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const CountryListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint.md`
  
  margin-bottom: 16px;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const BordersWrapper = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-right: 16px;
    font-size: 16px;
    min-width: 150px;
  }
`;

export const BordersList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
