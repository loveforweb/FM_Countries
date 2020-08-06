import React, { createContext, useState } from 'react';

export const CountriesContext = createContext([]);

const CountriesProvider = (props) => {
  const [displayCountries, setDisplayCountries] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [initialCountries, setIntialCoutries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  return (
    <CountriesContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
