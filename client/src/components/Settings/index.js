import React from 'react';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
  width: 100%;
  color: white;
  font-weight: 400;
`;

const Settings = () => (
  <SettingsWrapper>
    <p>Number of groups</p>
    <p>Initial countdown</p>
    <p>Excersise interval</p>
    <p>Rest interval</p>
  </SettingsWrapper>
);

export default Settings;
