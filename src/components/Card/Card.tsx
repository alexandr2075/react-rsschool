import React, { Component } from 'react';
import './Card.css';

export type UrlsType = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};

export type CardPropsType = {
  id?: string;
  // key?: string;
  description: string;
  created_at?: string;
  likes?: number;
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
        <p className="card-name">{this.props.description}</p>
      </div>
    );
  }
}
