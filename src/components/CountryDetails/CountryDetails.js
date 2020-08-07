import {
  BordersList,
  BordersWrapper,
  CountryDetailsWrapper,
  CountryListWrapper,
  CountryStatsList,
  Heading,
} from './CountryDetailsStyle';

import BorderTags from '../BorderTags';
import CountryStat from '../CountryStat';
import PropTypes from 'prop-types';
import React from 'react';

const CountryDetails = ({ countryData }) => {
  return (
    <CountryDetailsWrapper>
      <Heading>{countryData.name}</Heading>
      <CountryListWrapper>
        <CountryStatsList>
          <CountryStat title="Native Name" stat={countryData.nativeName} />
          <CountryStat
            title="Population"
            stat={countryData.population.toLocaleString()}
          />
          <CountryStat title="Region" stat={countryData.region} />
          <CountryStat title="Sub Region" stat={countryData.subregion} />
          <CountryStat title="Capital" stat={countryData.capital} />
        </CountryStatsList>

        <CountryStatsList>
          <CountryStat
            title="Top Level Domain"
            stat={countryData.topLevelDomain}
          />
          <CountryStat title="Currencies" stat={countryData.currencies} />
          <CountryStat title="Languages" stat={countryData.languages} />
        </CountryStatsList>
      </CountryListWrapper>

      {countryData.borders.length ? (
        <BordersWrapper>
          <span>Border Countries</span>
          <BordersList>
            {countryData.borders.map((border) => {
              return <BorderTags key={border.alpha3Code} {...border} />;
            })}
          </BordersList>
        </BordersWrapper>
      ) : null}
    </CountryDetailsWrapper>
  );
};

CountryDetails.propTypes = {
  countryData: PropTypes.shape({}).isRequired,
};

export default CountryDetails;
