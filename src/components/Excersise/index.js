import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import translations from '../../assets/translations';

const ExcersiseWrapper = styled.div`
  border-bottom: solid 1px ${props => props.theme.borderColor};
  background-color: ${props => props.theme.overlayColor};
`;

const AccordionLabelWrapper = styled.div`

  color: ${props => props.theme.textColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .type,
  .group {
    color: #C5C9C9;
    font-weight: 400;
  }

  .group {
    font-size: 0.5rem;
  }

  .type {
    font-size: 0.6rem;
  }

  .title {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1.3rem;
  }
`;

const AccordionContentWrapper = styled.div`
  color: white;
  background-color: ${props => props.theme.accordionColor};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  font-weight: 400;
  font-size: 0.7rem;
  padding: 13px;
  line-height: 1.5;
  animation: fadein 0.35s ease-in

  @keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
`;

class Excersise extends Component {
  state = {
    isOpen: false
  };

  onClick = () => {
    const {
      state: { isOpen }
    } = this;

    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      props: {
        excersise: { name, trainingTypes, muscleGroups, variations }
      },
      state: { isOpen }
    } = this;

    return (
      <Fragment>
        <ExcersiseWrapper>
          <AccordionLabelWrapper onClick={() => this.onClick()}>
            <span>
              <p className="type">
                {trainingTypes.map((type, i, arr) => `${translations[type]}${arr.length - 1 === i ? '' : ' / '}`)}
              </p>
              <p className="title">{name}</p>
              <p className="group">
                {muscleGroups.map((group, i, arr) => `${translations[group]}${arr.length - 1 === i ? '' : ' / '}`)}
              </p>
            </span>
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus } size={'xs'}/>
          </AccordionLabelWrapper>
          <AccordionContentWrapper isOpen={isOpen}>
            <p>{variations[1] ? variations[1].description : variations[0].description}</p>
          </AccordionContentWrapper>
        </ExcersiseWrapper>
      </Fragment>
    );
  }
}

export default Excersise;
