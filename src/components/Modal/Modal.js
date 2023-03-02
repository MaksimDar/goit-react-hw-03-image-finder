import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    // const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <img src={this.props.largeImageURL} alt="XXX" />
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
