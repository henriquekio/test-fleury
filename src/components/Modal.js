import React from 'react';

const Modal = props => {
  const { open = false, title= '' } = props;

  return (
    <>
      {open ? (
        <div className="modal">
          <div className="modal__container small">
            <h5 className="modal__title">{title}</h5>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
