import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 21px;
  margin-bottom: 50px;

  ${breakpoint.md`
    margin-top: 50px;
  `}
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-row-gap: 40px;
  margin-bottom: 30px;

  ${breakpoint.md`
    grid-template-columns: 480px 1fr;
    grid-template-rows: unset;
    grid-row-gap: 20px;
    margin-bottom: 48px;
  `}
`;

export const CountriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-row-gap: 35px;
  padding-left: 38px;
  padding-right: 38px;

  ${breakpoint.md`
  grid-column-gap: 5.2vw;
  grid-row-gap: 5vw;
    padding-left: 0;
    padding-right: 0;
  `}
`;
