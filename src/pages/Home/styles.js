import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 50px;
`;
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -37px;
  width: calc(100% + 75px);
  padding: 0;
  justify-content: center;
`;
export const CountriesListItem = styled.li`
  list-style: none;
  width: 264px;
  margin: 0 37px 75px;
`;
