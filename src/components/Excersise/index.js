import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import translations from '../../assets/translations';

const ExcersiseWrapper = styled.div`
  ${({ border, theme }) => border && `border-bottom: solid 1px ${theme.borderColor}`};
  ${({ border, theme }) => !border && `border-radius: 0 0 5px 5px`};
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
    color: #c5c9c9;
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const AccordionContentWrapper = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.overlayBrightColor};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  font-weight: 400;
  font-size: 0.7rem;
  padding: 13px;
  line-height: 1.5;
  animation: ${fadeIn} 0.35s ease-in;
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
        excersise: { name, trainingTypes, muscleGroups, variations },
        border = true
      },
      state: { isOpen }
    } = this;

    return (
      <Fragment>
        <ExcersiseWrapper border={border}>
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
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size={'xs'} />
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
