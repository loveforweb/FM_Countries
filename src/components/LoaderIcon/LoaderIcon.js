import { LoaderIconWrapper } from './LoaderIconStyle';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../images/loading-icon.svg';

const LoaderIcon = () => {
  return (
    <LoaderIconWrapper>
      <img src={logo} alt="loading..." />
    </LoaderIconWrapper>
  );
};

LoaderIcon.propTypes = {
  //
};

export default LoaderIcon;
