import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { darkTheme, lightTheme } from './components/Themes/Themes';

import CountryPage from './pages/Country';
import Footer from './components/Footer';
import GlobalStyles from './components/Globalstyles';
import Header from './components/Header';
import HomePage from './pages/Home';
import { ThemeProvider } from 'styled-components';
import ThemeSwitcher from './components/ThemeSwitcher';
import axios from 'axios';
import { useQuery } from 'react-query';

const App = () => {
  const [pageTheme, setPageTheme] = useState('light');
  const [initialCountries, setIntialCoutries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');

  const themeToggler = () => {
    pageTheme === 'light' ? setPageTheme('dark') : setPageTheme('light');
  };

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
      const filteredCountries = initialCountries.filter((country) => {
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
    console.log(text);

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

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <ThemeProvider theme={pageTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header>
          <ThemeSwitcher theme={pageTheme} themeToggler={themeToggler} />
        </Header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                countries={displayCountries}
                filterCountriesByText={filterCountriesByText}
                searchText={searchText}
                handleFocusBlur={handleFocusBlur}
                searchFocused={searchFocused}
                filterCountriesByRegion={filterCountriesByRegion}
                selectedRegion={selectedRegion}
              />
            )}
          />
          <Route exact path="/country/:id" component={CountryPage} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
