import { FlagWrapper } from './CountryFlagStyle';
import PropTypes from 'prop-types';
import React from 'react';

const CountryFlag = ({ imgSrc, altAttr, large }) => {
  return (
    <FlagWrapper
    // style={{ backgroundImage: 'url(' + imgSrc + ')' }}
    // large={large}
    >
      <img src={imgSrc} alt={altAttr} />
      <span className="sr-only">Flag of {altAttr}</span>
    </FlagWrapper>
  );
};

CountryFlag.propTypes = {
  //
};

export default CountryFlag;
