import {
  API_STALE_TIMEOUT,
  borderAPI,
  countryDataAPI,
} from '../../api-calls/api';
import { PageGrid, PageWrapper } from './styles';

import BackButton from '../../components/BackButton/BackButton';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import CountryFlag from '../../components/CountryFlag';
import LoaderIcon from '../../components/LoaderIcon';
import React from 'react';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

const CountryPage = ({ match, location }) => {
  const alpha3Code = match.params.id;

  let borderCodeParams = '';
  let languagesList = '';
  let currenciesList = '';
  let topLevelDomainList = '';

  const { status: countryStatus, data: countryData } = useQuery(
    `${alpha3Code}`,
    countryDataAPI,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

  if (countryData) {
    borderCodeParams = countryData.borders.join(';');
  }

  const { status: borderStatus, data: borderData = [] } = useQuery(
    `${borderCodeParams}`,
    borderAPI,
    {
      enabled: (countryData && countryData.borders.length > 0) || false,
      staleTime: API_STALE_TIMEOUT,
    }
  );

  if (countryStatus === 'loading' || borderStatus === 'loading')
    return <LoaderIcon />;
  if (countryStatus === 'error' || borderStatus === 'error')
    return <p>Error :(</p>;

  if (countryData.languages) {
    countryData.languages.forEach((lang, i) => {
      languagesList += `${lang.name}${
        i + 1 === countryData.languages.length ? '' : ', '
      }`;
    });
  }

  if (countryData.currencies) {
    countryData.currencies.forEach((curr, i) => {
      currenciesList += `${curr.name}${
        i + 1 === countryData.currencies.length ? '' : ', '
      }`;
    });
  }

  if (countryData.topLevelDomain) {
    countryData.topLevelDomain.forEach((tld, i) => {
      topLevelDomainList += `${tld}${
        i + 1 === countryData.topLevelDomain.length ? '' : ', '
      }`;
    });
  }

  const updatedCountryData = {
    ...countryData,
    languages: languagesList,
    currencies: currenciesList,
    topLevelDomain: topLevelDomainList,
    borders: [...borderData],
  };

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default withRouter(CountryPage);
