import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onChange }) => {
  return (
    <form action="input">
      <FilterInput type="text" value={value} onChange={onChange} />
    </form>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const FilterInput = styled.input`
  width: 300px;
  padding: 10px 40px;
  border-radius: 20px;
  border: transparent;
  margin-bottom: 30px;
`;
