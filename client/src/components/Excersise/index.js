import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Accordion from './Accordion';
import translations from '../../assets/translations';

const Wrapper = styled.div`
  background-color: ${props => props.theme.overlayColor};
  border-radius: inherit;
`;

class Excersise extends Component {
  getTrainingTypes(trainingTypes) {
    return trainingTypes && trainingTypes.map(type => translations[type]).join(' / ');
  }

  getMuscleGroups(muscleGroups) {
    return muscleGroups && muscleGroups.map(group => translations[group]).join(' / ');
  }

  getDescription(variations) {
    if (!variations) {
      return;
    }
    return variations[1] ? variations[1].description : variations[0].description;
  }

  render() {
    const { excersise, active, slim } = this.props;
    const content = this.getDescription(excersise.variations);

    return (
      <Fragment>
        <Wrapper>
          <Accordion
            label={excersise.name}
            top={!slim && this.getTrainingTypes(excersise.trainingTypes)}
            bottom={!slim && this.getMuscleGroups(excersise.muscleGroups)}
            active={active}
          >
            {!slim && content && <Accordion.Content content={content} />}
          </Accordion>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Excersise;
