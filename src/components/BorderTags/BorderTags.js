import { BordersList, BordersWrapper, CountryButton } from './BorderTagsStyle';

import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import { borders } from '../../all-countries';
import { useQuery } from 'react-query';

const BorderTags = ({ borderCodes }) => {
  // const data = borders;
  const borderCodeParams = borderCodes.join(';');

  const { status, data } = useQuery(`borders-${borderCodeParams}`, async () => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/alpha?codes=${borderCodeParams}&fields=name;alpha3Code;population;region;capital;flag;alpha3Code`
    );
    return data;
  });

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <BordersWrapper>
      {data.length ? (
        <>
          <span>Border Countries:</span>
          <BordersList>
            {data.map((country) => {
              const {
                name,
                population,
                region,
                capital,
                flag,
                alpha3Code,
              } = country;
              return (
                <CountryButton
                  className="btn btn-link"
                  to={{
                    pathname: `/country/${alpha3Code}`,
                    state: {
                      name,
                      population,
                      region,
                      capital,
                      flag,
                      alpha3Code,
                    },
                  }}
                  key={country.alpha3Code}
                >
                  {country.name}
                </CountryButton>
              );
            })}
          </BordersList>
        </>
      ) : null}
    </BordersWrapper>
  );
};

BorderTags.propTypes = {
  //
};

export default BorderTags;
