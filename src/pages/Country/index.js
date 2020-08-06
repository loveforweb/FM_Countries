import BackButton from '../../components/BackButton/BackButton';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import CountryFlag from '../../components/CountryFlag';
import { PageGrid } from './styles';
import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

const CountryPage = ({ match, location }) => {
  const { name, alpha3Code } = location.state;
  let borderCodeParams = '';

  const { status: countryStatus, data: countryData } = useQuery(
    `country-${alpha3Code}`,
    async () => {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}?fields=name;flag;population;flag;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders`
      );

      return data[0];
    },
    {
      staleTime: 86400000,
    }
  );

  if (countryData) {
    borderCodeParams = countryData.borders.join(';');
  }

  const { status, data: borderData = [] } = useQuery(
    `borders-${borderCodeParams}`,
    async () => {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/alpha?codes=${borderCodeParams}&fields=name;alpha3Code;population;region;capital;flag;alpha3Code`
      );
      return data;
    },
    {
      enabled: (countryData && countryData.borders.length > 0) || false,
      staleTime: 86400000,
    }
  );

  if (countryStatus === 'loading' || status === 'loading')
    return <p>Loading...</p>;
  if (countryStatus === 'error' || status === 'error') return <p>Error :(</p>;

  const { currencies, languages } = countryData;
  let languagesList = '';
  let currenciesList = '';

  if (languages) {
    languages.forEach((lang, i) => {
      languagesList += `${lang.name}${i + 1 === languages.length ? '' : ', '}`;
    });
  }

  if (currencies) {
    currencies.forEach((curr, i) => {
      currenciesList += `${curr.name}${
        i + 1 === currencies.length ? '' : ', '
      }`;
    });
  }

  const updatedCountryData = {
    ...countryData,
    languages: languagesList,
    currencies: currenciesList,
    borders: [...borderData],
    name,
    alpha3Code,
  };

  return (
    <div className="container">
      <PageGrid>
        <BackButton />
        <CountryFlag
          imgSrc={countryData.flag}
          altAttr={countryData.name}
          large
          asImage
        />
        <CountryDetails countryData={updatedCountryData} />
      </PageGrid>
    </div>
  );
};

export default withRouter(CountryPage);
