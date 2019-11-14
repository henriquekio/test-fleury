import React from 'react';
import { ReactComponent as PhoneIcon } from '../../../assets/icons/phone-icon.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/chat-icon.svg';
import { ReactComponent as MessengerIcon } from '../../../assets/icons/messenger-icon.svg';

const ContentModal = () => {
  return (
    <>
      <h6 className="thiny-text">Escolha como você gostaria de agendar: </h6>
      <ul className="modal__list">
        <li>
          <PhoneIcon />
          <p>11 3179 0822</p>
        </li>
        <li>
          <ChatIcon />
          <p>Chat Online</p>
        </li>
        <li>
          <MessengerIcon />
          <p>Messenger</p>
        </li>
      </ul>
    </>
  );
};

export default ContentModal;
