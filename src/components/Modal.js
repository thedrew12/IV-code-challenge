// @flow
import React from 'react';
import ReactModal from 'react-modal';
import styled, { css, injectGlobal } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import closeIcon from '../icons/close.svg';

const overlayStyles = css`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*='after-open'] {
    opacity: 1;
  }
  &[class*='before-close'] {
    opacity: 0;
  }

  ${breakpoint('desktop')`
    position: fixed;
  `};
`;

const StyledReactModal = styled(({ className, ...props }) => (
  <Wrapper
    overlayClassName={className}
    closeTimeoutMS={250}
    ariaHideApp={false}
    shouldReturnFocusAfterClose={false}
    {...props}
  />
))`
  ${overlayStyles};
`;

type Props = {
  isOpen: boolean,
  onClose: () => void,
  children: any
}

class Modal extends React.PureComponent<Props> {
  render() {
    const { isOpen, onClose, children, ...rest } = this.props;
    return (
      <StyledReactModal isOpen={isOpen} onRequestClose={onClose} {...rest}>
        <CloseIcon src={closeIcon} onClick={onClose} />
        {children}
      </StyledReactModal>
    );
  }
}

const CloseIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 2rem;
  z-index: 2;
  right: 20px;
  top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled(ReactModal)`
  position: absolute;
  min-height: 100%;
  display: flex;
  text-align: left;
  margin: 0;
  outline: 0;
  width: 100%;

  ${breakpoint('desktop')`
    margin: 3rem auto;
    width: auto;
    display: inline-block;
    position: relative;
    min-height: inherit;
  `};
`;

injectGlobal`
  body.ReactModal__Body--open {
    padding-bottom: 0;

    ${breakpoint('desktop')`
      overflow: hidden;
    `};

    #root {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`;

export default Modal;
