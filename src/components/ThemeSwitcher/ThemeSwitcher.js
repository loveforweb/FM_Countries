import { FaMoon, FaRegMoon } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { SwitchButton } from './ThemeSwitcherStyle';

const ThemeSwitcher = ({ themeToggler, theme }) => {
  return (
    <SwitchButton variant="link" onClick={themeToggler}>
      {theme === 'light' ? <FaMoon /> : <FaRegMoon />}
      <span>Dark Mode</span>
    </SwitchButton>
  );
};

ThemeSwitcher.propTypes = {
  //
};

export default ThemeSwitcher;
