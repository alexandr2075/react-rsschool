import React, { Component } from 'react';
import './FormCard.css';

export type PropsFormCardType = {
  key?: number;
  src: string;
  name: string;
  birth: string;
  gender: string;
  country: string;
};

class FormCard extends Component<PropsFormCardType> {
  render() {
    return (
      <div className="form-card" data-testid="form-card">
        <div className="form-card_img">
          <img src={this.props.src} alt="profile" />
        </div>
        <p className="form-card_name">{this.props.name}</p>
        <p className="form-card_birth">{this.props.birth}</p>
        <p className="form-card_gender">Gender: {this.props.gender}</p>
        <p className="form-card_country">{this.props.country}</p>
      </div>
    );
  }
}

export default FormCard;
