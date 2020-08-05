import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const PageGrid = styled.div`
  padding-top: 81px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  ${breakpoint.md`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-row-gap: 80px;
    grid-column-gap: 80px;
  `}
`;

export const DetailsContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 0;
`;

export const CountryStatsList = styled.ul`
  margin: 0;
  padding: 0;

  li {
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
