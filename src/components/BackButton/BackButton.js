import { BackButtonWrapper, IconWrapper } from './BackButtonStyle';

import { IoIosArrowRoundBack } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  let history = useHistory();
  return (
    <BackButtonWrapper variant="link" onClick={history.goBack}>
      <IconWrapper>
        <IoIosArrowRoundBack />
      </IconWrapper>{' '}
      Back
    </BackButtonWrapper>
  );
};

BackButton.propTypes = {
  //
};

export default BackButton;
