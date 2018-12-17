import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Accordion from './Accordion';
import translations from '../../assets/translations';

const Wrapper = styled.div`
  background-color: ${props => props.theme.overlayColor};
  border-bottom: solid 1px ${props => props.theme.borderColor};

  :last-child {
    border-bottom: none;
    border-radius: 0 0 3px 3px;
  }
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
    const { excersise, active } = this.props;
    const content = this.getDescription(excersise.variations);

    return (
      <Fragment>
        <Wrapper>
          <Accordion
            label={excersise.name}
            top={this.getTrainingTypes(excersise.trainingTypes)}
            bottom={this.getMuscleGroups(excersise.muscleGroups)}
            active={active}
          >
            {content && <Accordion.Content content={content} />}
          </Accordion>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Excersise;
