import React, { MouseEvent, useEffect, useState } from 'react';
import { Card, UrlsType } from '../../components/Card/Card';
import './Home.css';
import { Modal } from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSearchResults } from '../../features/searchResultsSlice';
import { TbLoader3 } from 'react-icons/tb';
import { useGetUnsplashQuery } from '../../services/unsplashApi';

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
  const { data, isLoading } = useGetUnsplashQuery('photos');

  const cards = useAppSelector((state) => state.search.searchResults);
  const searchError = useAppSelector((state) => state.search.searchError);
  const dispatch = useAppDispatch();
  const [cardModal, setCardModal] = useState<DataCard>(initialDataCard);
  const [isVisibleModalCard, setIsVisibleModalCard] = useState(false);

  useEffect(() => {
    if (data) dispatch(setSearchResults(data));
  }, [data]);

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
      {isLoading ? (
        <TbLoader3 size={100} />
      ) : (
        cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              description={card.alt_description}
              url={card.urls.small}
              onClick={modalClick}
            />
          );
        })
      )}
      {searchError && <div className={'home-error'}>{searchError}</div>}
      {isVisibleModalCard && <Modal card={cardModal} closeModal={closeModal} />}
    </div>
  );
};
