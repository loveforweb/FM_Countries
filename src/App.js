import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { darkTheme, lightTheme } from './components/Themes/Themes';

import CountryPage from './pages/Country';
import Footer from './components/Footer';
import GlobalStyles from './components/Globalstyles';
import Header from './components/Header';
import HomePage from './pages/Home';
import { ThemeProvider } from 'styled-components';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const [pageTheme, setPageTheme] = useState('light');

  const themeToggler = () => {
    pageTheme === 'light' ? setPageTheme('dark') : setPageTheme('light');
  };

  return (
    <ThemeProvider theme={pageTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header>
          <ThemeSwitcher theme={pageTheme} themeToggler={themeToggler} />
        </Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/country/:id" component={CountryPage} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
