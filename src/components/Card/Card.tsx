import React, { Component } from 'react';
import './Card.css';

export type CardPropsType = {
  key: string;
  name: string;
  url: string;
};
export class Card extends Component<CardPropsType> {
  constructor(props: CardPropsType) {
    super(props);
  }
  render() {
    return (
      <div className={'card'} data-testid="card">
        <div className="card-img">
          <img src={this.props.url} alt="meme" className={'card-img_img'} />
        </div>
        <p className="card-name">{this.props.name}</p>
      </div>
    );
  }
}
