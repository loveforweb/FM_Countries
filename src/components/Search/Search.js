import { SearchIcon, SearchWrapper } from './SearchStyle';

import Form from 'react-bootstrap/Form';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';

const Search = ({
  filterCountriesByText,
  searchText,
  handleFocusBlur,
  searchFocused,
}) => {
  return (
    <SearchWrapper searchFocused={searchFocused}>
      <SearchIcon>
        <IoIosSearch />
      </SearchIcon>
      <Form.Control
        type="input"
        name="search"
        aria-label="Search"
        placeholder="Search for a country..."
        onChange={filterCountriesByText}
        value={searchText}
        onFocus={handleFocusBlur}
        onBlur={handleFocusBlur}
      />
    </SearchWrapper>
  );
};

Search.propTypes = {
  //
};

export default Search;
