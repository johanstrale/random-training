import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Accordion from '../Accordion';
import translations from '../../assets/translations';

const ExcersiseWrapper = styled.div`
  background-color: ${props => props.theme.overlayColor};
  border-bottom: solid 1px ${props => props.theme.borderColor};

  :last-child {
    border-bottom: none;
    border-radius: 0 0 3px 3px;
  }
`;

class Excersise extends Component {
  getTrainingTypes(trainingTypes) {
    return trainingTypes.map(type => translations[type]).join(' / ');
  }

  getMuscleGroups(muscleGroups) {
    return muscleGroups.map(group => translations[group]).join(' / ');
  }

  getDescription(variations) {
    return variations[1] ? variations[1].description : variations[0].description;
  }

  render() {
    const { excersise } = this.props;

    return (
      <Fragment>
        <ExcersiseWrapper>
          <Accordion
            label={excersise.name}
            top={this.getTrainingTypes(excersise.trainingTypes)}
            bottom={this.getMuscleGroups(excersise.muscleGroups)}
          >
            <Accordion.Content content={this.getDescription(excersise.variations)} />
          </Accordion>
        </ExcersiseWrapper>
      </Fragment>
    );
  }
}

export default Excersise;
