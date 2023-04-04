import React, { MouseEventHandler } from 'react';
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
  description: string;
  created_at?: string;
  likes?: number;
  url: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export function Card(props: CardPropsType) {
  return (
    <div id={props.id} className={'card'} data-testid="card" onClick={props.onClick}>
      <div className="card-img">
        <img src={props.url} alt="meme" className={'card-img_img'} />
      </div>
      <p className="card-name">{props.description}</p>
    </div>
  );
}
