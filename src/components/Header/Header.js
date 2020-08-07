import { HeaderContent, HeaderWrapper, Heading } from './HeaderStyle';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderContent>
          <Heading>
            <Link to="/"> Where in the world?</Link>
          </Heading>
          {children}
        </HeaderContent>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  children: PropTypes.shape({}),
};

export default Header;
