import React from 'react';
import './Modal.css';
import { DataCard } from 'pages/Home/Home';
import { FcBiohazard } from 'react-icons/fc';

type PropsModalType = {
  card: DataCard;
  closeModal: () => void;
};
export const Modal = (props: PropsModalType) => {
  // const { alt_description, created_at, likes, urls } = props.card;

  const onClickModalWrapper = () => {
    props.closeModal();
  };

  return (
    <div className="modal-wrapper" onClick={onClickModalWrapper}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={props.closeModal}>
          <FcBiohazard size={'30px'} />
        </span>
        <div className="modal_img">
          <img src={props.card.urls.small} alt="photo" />
        </div>
        <div className="modal_params">
          {props.card && (
            <ul>
              {Object.entries(props.card).map((el, index) => {
                return <li key={index}>{`${el[0]}: ${el[1]}`}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
