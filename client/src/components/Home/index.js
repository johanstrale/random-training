import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
`;

const Home = props => (
  <Wrapper>
    <FontAwesomeIcon icon={faDumbbell} color="white" size="4x" />
  </Wrapper>
);

export default Home;
