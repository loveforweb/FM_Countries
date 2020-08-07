import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownWrapper } from './RegionFilterStyle';
import { IoIosArrowDown } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ filterCountriesByRegion, selectedRegion }) => {
  return (
    <DropdownWrapper onSelect={filterCountriesByRegion}>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        Filter by Region
        <IoIosArrowDown />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          eventKey="All Regions"
          key={`all`}
          className={selectedRegion === 'All Regions' ? 'selected' : null}
        >
          All Regions
        </Dropdown.Item>
        {regions.map((region, i) => {
          return (
            <Dropdown.Item
              eventKey={region}
              key={`${i}_${region}`}
              className={region === selectedRegion ? 'selected' : null}
            >
              {region}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </DropdownWrapper>
  );
};

RegionFilter.propTypes = {
  filterCountriesByRegion: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default RegionFilter;
