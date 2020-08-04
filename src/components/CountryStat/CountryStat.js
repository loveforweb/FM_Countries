import { CountryStatWrapper } from './CountryStatStyle';
import PropTypes from 'prop-types';
import React from 'react';

const CountryStat = ({ title, stat }) => {
  return (
    <CountryStatWrapper>
      <span>{title}</span>: {stat}
    </CountryStatWrapper>
  );
};

CountryStat.propTypes = {
  //
};

export default CountryStat;
