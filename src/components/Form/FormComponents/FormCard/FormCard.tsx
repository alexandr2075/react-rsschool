import React from 'react';
import './FormCard.css';

export type PropsFormCardType = {
  key?: number;
  src: string;
  name: string;
  birth: string;
  gender: string;
  country: string;
};

function FormCard(props: PropsFormCardType) {
  return (
    <div className="form-card" data-testid="form-card">
      <div className="form-card_img">
        <img src={props.src} alt="profile" />
      </div>
      <p className="form-card_name">{props.name}</p>
      <p className="form-card_birth">{props.birth}</p>
      <p className="form-card_gender">Gender: {props.gender}</p>
      <p className="form-card_country">{props.country}</p>
    </div>
  );
}

export default FormCard;
