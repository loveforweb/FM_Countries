import { BackButtonWrapper, IconWrapper } from './BackButtonStyle';

import { IoIosArrowRoundBack } from 'react-icons/io';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  let history = useHistory();
  return (
    <BackButtonWrapper className="btn" onClick={history.goBack}>
      <IconWrapper>
        <IoIosArrowRoundBack />
      </IconWrapper>{' '}
      Back
    </BackButtonWrapper>
  );
};

export default BackButton;
