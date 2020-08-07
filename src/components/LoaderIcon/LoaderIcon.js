import { LoaderIconWrapper } from './LoaderIconStyle';
import React from 'react';
import logo from '../../images/loading-icon.svg';

const LoaderIcon = () => {
  return (
    <LoaderIconWrapper>
      <img src={logo} alt="loading..." />
    </LoaderIconWrapper>
  );
};

export default LoaderIcon;
