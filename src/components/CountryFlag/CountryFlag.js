import { FlagWrapper } from './CountryFlagStyle';
import PropTypes from 'prop-types';
import React from 'react';

const CountryFlag = ({ imgSrc, altAttr }) => {
  return (
    <FlagWrapper>
      <img src={imgSrc} alt={altAttr} />
      <span className="sr-only">Flag of {altAttr}</span>
    </FlagWrapper>
  );
};

CountryFlag.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altAttr: PropTypes.string.isRequired,
};

export default CountryFlag;
