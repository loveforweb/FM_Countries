import {
  CountryCardContent,
  CountryCardWrapper,
  CountryName,
  CountryStatsList,
  CountrySummary,
} from './CountryCardStyle';

import CountryFlag from '../CountryFlag';
import CountryStat from '../CountryStat';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
  alpha3Code,
}) => {
  return (
    <CountryCardWrapper>
      <Link
        to={{
          pathname: `/country/${alpha3Code}`,
          state: { alpha3Code },
        }}
      >
        <CountryCardContent>
          <CountryFlag imgSrc={flag} altAttr={name} />
          <CountrySummary>
            <CountryName>{name}</CountryName>
            <CountryStatsList>
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
                <CountryStat title="Capital" stat={capital} />
              </li>
            </CountryStatsList>
          </CountrySummary>
        </CountryCardContent>
      </Link>
    </CountryCardWrapper>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  alpha3Code: PropTypes.string.isRequired,
};

export default CountryCard;
