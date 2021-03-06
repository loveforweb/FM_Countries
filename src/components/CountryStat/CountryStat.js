import { CountryStatWrapper } from './CountryStatStyle';
import PropTypes from 'prop-types';
import React from 'react';

const CountryStat = ({ title, stat }) => {
  return (
    <CountryStatWrapper>
      <span>{title}</span>: {stat ? stat : '-'}
    </CountryStatWrapper>
  );
};

CountryStat.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default CountryStat;
