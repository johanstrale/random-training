import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import AccordionContent from './AccordionContent';

const AccordionWrapper = styled.div`
  background-color: ${props => props.theme.overlayColor};
  color: ${props => props.theme.textColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: inherit;

  .top,
  .bottom {
    color: #c5c9c9;
    font-weight: 400;
  }

  .bottom {
    font-size: 0.5rem;
  }

  .top {
    font-size: 0.6rem;
  }

  .label {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1.3rem;
  }
`;

class Accordion extends Component {
  state = {
    isOpen: false
  };

  static Content = AccordionContent;

  onClick = () => {
    const {
      state: { isOpen }
    } = this;

    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      props: { label, top, bottom },
      state: { isOpen }
    } = this;

    return (
      <Fragment>
        <AccordionWrapper onClick={() => this.onClick()}>
          <span>
            <p className="top">{top}</p>
            <p className="label">{label}</p>
            <p className="bottom">{bottom}</p>
          </span>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size={'xs'} />
        </AccordionWrapper>
        {isOpen && this.props.children}
      </Fragment>
    );
  }
}

export default Accordion;

// ${({ border, theme }) => border && `border-bottom: solid 1px ${theme.borderColor}`};
// ${({ border, theme }) => !border && `border-radius: 0 0 3px 3px`};
