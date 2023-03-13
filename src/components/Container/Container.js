import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
const StyledContainer = styled.div`
  display: block;
  max-width: 500px;

  justify-content: center;
  margin: 0 auto;
  text-align: center;
  border-radius: 20px;
  background-color: aqua;
  padding: 30px;
`;
