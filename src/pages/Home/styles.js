import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 50px;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-row-gap: 20px;
  margin-bottom: 20px;

  ${breakpoint.md`
    grid-template-columns: 480px 1fr;
    grid-template-rows: unset;
    margin-bottom: 48px;
  `}
`;

export const CountriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-column-gap: 5.2vw;
  grid-row-gap: 5vw;
  padding-left: 30px;
  padding-right: 30px;

  ${breakpoint.md`
    padding-left: 0;
    padding-right: 0;
  `}
`;
