import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';

const Modal = (props) => {
  const [ open, setOpen ] = useState(false);

  const { opened = false, title = '' } = props;

  useEffect(() => {
    setOpen(opened);
  }, [opened]);


  const closeModal = () => {
    props.closeModal();
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <div className="modal">
          <div className="modal__container small">
            <button
              onClick={closeModal}
              type="button"
              className="modal__close"
            >
              <CloseIcon/>
            </button>
            <h5 className="modal__title">{title}</h5>
            {props.children}
          </div>
        </div>
      ) : (
        ''
      )}
    </>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  opened: PropTypes.bool,
  title: PropTypes.string,
};

export default Modal;
