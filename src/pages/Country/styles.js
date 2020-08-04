import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export const ContainerWrapper = styled(Container)`
  padding-top: 81px;
`;

export const DetailsContainer = styled.div`
  margin-left: 26px;
  margin-top: 40px;
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
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
  flex-direction: row;
  justify-content: space-between;
`;
