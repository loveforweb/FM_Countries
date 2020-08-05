import { CountriesList, PageWrapper, TopGrid } from './styles';

import CountryCard from '../../components/CountryCard';
import React from 'react';
import RegionFilter from '../../components/RegionFilter';
import Search from '../../components/Search/Search';

const HomePage = (props) => {
  return (
    <PageWrapper>
      <div className="container">
        <TopGrid>
          <Search
            filterCountriesByText={props.filterCountriesByText}
            searchText={props.searchText}
            handleFocusBlur={props.handleFocusBlur}
            searchFocused={props.searchFocused}
          />
          <RegionFilter
            filterCountriesByRegion={props.filterCountriesByRegion}
            selectedRegion={props.selectedRegion}
          />
        </TopGrid>
        <CountriesList>
          {props.countries.length ? (
            props.countries.map((country) => {
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
