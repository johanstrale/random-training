import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  margin: auto;
`;

const Home = props => (
  <HomeWrapper>
    <FontAwesomeIcon icon={faDumbbell} color="white" size="4x" />
  </HomeWrapper>
);

export default Home;
