import { FaMoon, FaRegMoon } from 'react-icons/fa';

import PropTypes from 'prop-types';
import React from 'react';
import { SwitchButton } from './ThemeSwitcherStyle';

const ThemeSwitcher = ({ themeToggler, theme }) => {
  return (
    <SwitchButton variant="link" className="btn" onClick={themeToggler}>
      {theme === 'light' ? <FaRegMoon /> : <FaMoon />}
      <span>Dark Mode</span>
    </SwitchButton>
  );
};

ThemeSwitcher.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ThemeSwitcher;
