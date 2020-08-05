import { HeaderWrapper, Heading } from './HeaderStyle';

import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/Row';

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="container">
        <Row>
          <Col>
            <Heading>
              <Link to="/"> Where in the world?</Link>
            </Heading>
          </Col>
          <Col className="text-right">{children}</Col>
        </Row>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  //
};

export default Header;
