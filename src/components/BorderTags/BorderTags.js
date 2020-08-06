import { CountryButton } from './BorderTagsStyle';
import PropTypes from 'prop-types';
import React from 'react';

const BorderTags = ({ name, alpha3Code }) => {
  return (
    <CountryButton
      className="btn btn-link"
      to={{
        pathname: `/country/${alpha3Code}`,
        state: {
          name,
          alpha3Code,
        },
      }}
      key={alpha3Code}
    >
      {name}
    </CountryButton>
  );
};

BorderTags.propTypes = {
  //
};

export default BorderTags;
