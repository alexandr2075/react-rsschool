import React, { MouseEvent, useState } from 'react';
import { Card, UrlsType } from '../../components/Card/Card';
import './Home.css';
import { useOutletContext } from 'react-router-dom';
import { Modal } from '../../components/Modal/Modal';

type OutletContextType = {
  cards: Array<DataCard>;
  isLoading: boolean;
  error: string;
};

export type DataCard = {
  id: string;
  alt_description: string;
  created_at: string;
  likes: number;
  urls: UrlsType;
};

const initialUrls = {
  full: '',
  raw: '',
  regular: '',
  small: '',
  small_s3: '',
  thumb: '',
};

const initialDataCard = {
  id: '',
  alt_description: '',
  created_at: '',
  likes: 0,
  urls: initialUrls,
};

export const Home = () => {
  const { cards, isLoading, error } = useOutletContext<OutletContextType>();
  const [cardModal, setCardModal] = useState<DataCard>(initialDataCard);
  const [isVisibleModalCard, setIsVisibleModalCard] = useState(false);

  const modalClick = (event: MouseEvent) => {
    const currentCardId = event.currentTarget.id;
    const currentCard = cards.find((card) => card.id === currentCardId);
    if (currentCard) setCardModal(currentCard);
    setIsVisibleModalCard(true);
  };

  const closeModal = () => {
    setIsVisibleModalCard(false);
  };

  return (
    <div className="cards">
      {isLoading
        ? '..Loading'
        : cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                description={card.alt_description}
                url={card.urls.small}
                onClick={modalClick}
              />
            );
          })}
      {error && <div className={'home-error'}>{error}</div>}
      {isVisibleModalCard && <Modal card={cardModal} closeModal={closeModal} />}
    </div>
  );
};
