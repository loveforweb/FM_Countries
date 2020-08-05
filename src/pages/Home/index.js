import { CountriesList, CountriesListItem, PageWrapper } from './styles';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CountryCard from '../../components/CountryCard';
import React from 'react';
import RegionFilter from '../../components/RegionFilter';
import Row from 'react-bootstrap/Row';
import Search from '../../components/Search/Search';

const HomePage = (props) => {
  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col md={5}>
            <Search
              filterCountriesByText={props.filterCountriesByText}
              searchText={props.searchText}
              handleFocusBlur={props.handleFocusBlur}
              searchFocused={props.searchFocused}
            />
          </Col>
          <Col className="text-right">
            <RegionFilter
              filterCountriesByRegion={props.filterCountriesByRegion}
              selectedRegion={props.selectedRegion}
            />
          </Col>
        </Row>
        <CountriesList>
          {props.countries.length ? (
            props.countries.map((country) => {
              return (
                <CountriesListItem key={country.alpha3Code}>
                  <CountryCard {...country} />
                </CountriesListItem>
              );
            })
          ) : (
            <p>No countries</p>
          )}
        </CountriesList>
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
