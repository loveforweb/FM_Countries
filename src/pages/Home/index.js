import { API_STALE_TIMEOUT, allCountriesAPI } from '../../api-calls/api';
import { CountriesList, PageWrapper, TopGrid } from './styles';
import React, { useContext, useEffect } from 'react';

import { CountriesContext } from '../../context/countriesContext';
import CountryCard from '../../components/CountryCard';
import LoaderIcon from '../../components/LoaderIcon';
import RegionFilter from '../../components/RegionFilter';
import Search from '../../components/Search/Search';
import { useQuery } from 'react-query';

const HomePage = (props) => {
  const {
    displayCountries,
    setDisplayCountries,
    hasData,
    setHasData,
    initialCountries,
    setIntialCoutries,
    searchText,
    setSearchText,
    searchFocused,
    setSearchFocused,
    selectedRegion,
    setSelectedRegion,
  } = useContext(CountriesContext);

  const { status, data } = useQuery(`all-countries`, allCountriesAPI, {
    staleTime: API_STALE_TIMEOUT,
  });

  useEffect(() => {
    if (data && !hasData) {
      setIntialCoutries(data);
      setDisplayCountries(data);
      setHasData(true);
    }
  }, [data, hasData, setIntialCoutries, setDisplayCountries, setHasData]);

  const handleFocusBlur = (e) => {
    if (e.type === 'focus') {
      setSearchFocused(true);
    } else {
      setSearchFocused(false);
    }
  };

  const filterCountriesByText = (e) => {
    const text = e.target.value.toLowerCase().trim();
    const allRegions = selectedRegion === 'All Regions' || false;

    const filteredCountries = initialCountries.filter((country) => {
      const countryName = country.name.toLowerCase();

      if (allRegions) {
        return countryName.includes(text);
      }

      return (
        countryName.includes(text) &&
        country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    });

    setSearchText(text);
    setDisplayCountries(filteredCountries);
  };

  const filterCountriesByRegion = (text) => {
    setSearchText('');
    setSelectedRegion(text);

    if (text === 'All Regions') {
      setDisplayCountries(initialCountries);
      return;
    }

    const filteredCountries = initialCountries.filter((country) => {
      const countryRegion = country.region;
      return countryRegion === text;
    });

    setDisplayCountries(filteredCountries);
  };

  if (status === 'loading') return <LoaderIcon />;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <PageWrapper>
      <div className="container">
        <TopGrid>
          <Search
            filterCountriesByText={filterCountriesByText}
            searchText={searchText}
            handleFocusBlur={handleFocusBlur}
            searchFocused={searchFocused}
          />
          <RegionFilter
            filterCountriesByRegion={filterCountriesByRegion}
            selectedRegion={selectedRegion}
          />
        </TopGrid>
        <CountriesList>
          {displayCountries.length ? (
            displayCountries.map((country) => {
              return <CountryCard {...country} key={country.alpha3Code} />;
            })
          ) : (
            <p>No countries</p>
          )}
        </CountriesList>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
