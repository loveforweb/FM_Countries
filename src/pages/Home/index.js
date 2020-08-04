import { CountriesList, CountriesListItem, PageWrapper } from './styles';
import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CountryCard from '../../components/CountryCard';
import RegionFilter from '../../components/RegionFilter';
import Row from 'react-bootstrap/Row';
import Search from '../../components/Search/Search';
import { allCountries } from '../../all-countries';
import axios from 'axios';
import { useQuery } from 'react-query';

const HomePage = () => {
  const [initialCountries, setIntialCoutries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');

  const { status, data } = useQuery(`all-countries`, async () => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;population;alpha3Code`
    );
    return data;
  });

  useEffect(() => {
    if (data) {
      setIntialCoutries(data);
      setDisplayCountries(data);
    }
  }, [data]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  const handleFocusBlur = (e) => {
    if (e.type === 'focus') {
      setSearchFocused(true);
    } else {
      setSearchFocused(false);
    }
  };

  const filterCountriesByText = (e) => {
    setSearchText(e.target.value.toLowerCase().trim());

    if (searchText.length) {
      const filteredCountries = allCountries.filter((country) => {
        const countryName = country.name.toLowerCase();
        return countryName.includes(searchText);
      });
      setDisplayCountries(filteredCountries);
    } else {
      setDisplayCountries(initialCountries);
    }
  };

  const filterCountriesByRegion = (text) => {
    setSearchText('');
    setSelectedRegion(text);

    if (text === 'All Regions') {
      setDisplayCountries(initialCountries);
      return;
    }

    const filteredCountries = allCountries.filter((country) => {
      const countryRegion = country.region;
      return countryRegion === text;
    });

    setDisplayCountries(filteredCountries);
  };

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col md={5}>
            <Search
              filterCountriesByText={filterCountriesByText}
              searchText={searchText}
              handleFocusBlur={handleFocusBlur}
              searchFocused={searchFocused}
            />
          </Col>
          <Col className="text-right">
            <RegionFilter
              filterCountriesByRegion={filterCountriesByRegion}
              selectedRegion={selectedRegion}
            />
          </Col>
        </Row>
        <CountriesList>
          {displayCountries.length ? (
            displayCountries.map((country) => {
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
