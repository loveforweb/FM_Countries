import {
  CountryListWrapper,
  CountryStatsList,
  DetailsContainer,
  Heading,
  PageGrid,
} from './styles';

import BackButton from '../../components/BackButton/BackButton';
import BorderTags from '../../components/BorderTags';
import Col from 'react-bootstrap/Col';
import CountryFlag from '../../components/CountryFlag';
import CountryStat from '../../components/CountryStat';
import React from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

const CountryPage = ({ match, location }) => {
  // const data = country;
  const {
    name,
    alpha3Code,
    flag,
    population,
    region,
    capital,
  } = location.state;

  const { status, data } = useQuery(`country-${alpha3Code}`, async () => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}?fields=nativeName;subregion;topLevelDomain;currencies;languages;borders`
    );

    return data;
  });

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  const {
    nativeName,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = data[0];
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
  return (
    <div className="container">
      <PageGrid>
        <BackButton />
        <CountryFlag imgSrc={flag} altAttr={name} large asImage />
        <DetailsContainer>
          <Heading>{name}</Heading>
          <CountryListWrapper>
            <CountryStatsList>
              <li>
                <CountryStat title="Native Name" stat={nativeName} />
              </li>
              <li>
                <CountryStat
                  title="Population"
                  stat={population.toLocaleString()}
                />
              </li>
              <li>
                <CountryStat title="Region" stat={region} />
              </li>

              <li>
                <CountryStat title="Sub Region" stat={subregion} />
              </li>
              <li>
                <CountryStat title="Capital" stat={capital} />
              </li>
            </CountryStatsList>

            <CountryStatsList>
              <li>
                <CountryStat title="Top Level Domain" stat={topLevelDomain} />
              </li>
              <li>
                <CountryStat title="Currencies" stat={currenciesList} />
              </li>
              <li>
                <CountryStat title="Languages" stat={languagesList} />
              </li>
            </CountryStatsList>
          </CountryListWrapper>
          {borders.length ? <BorderTags borderCodes={borders} /> : null}
        </DetailsContainer>
      </PageGrid>
    </div>
  );
};

export default withRouter(CountryPage);
