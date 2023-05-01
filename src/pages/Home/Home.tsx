import React, { MouseEvent, useEffect, useState } from 'react';
import { Card, UrlsType } from '../../components/Card/Card';
import './Home.css';
import { Modal } from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentPage, setSearchResults, setTotalPages } from '../../features/searchResultsSlice';
// import { TbLoader3 } from 'react-icons/tb';
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
  const pages = useAppSelector((state) => state.search.totalPages);
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const dispatch = useAppDispatch();
  const [cardModal, setCardModal] = useState<DataCard>(initialDataCard);
  const [isVisibleModalCard, setIsVisibleModalCard] = useState(false);

  useEffect(() => {
    dispatch(setTotalPages(0));
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

  const onClickPrev = () => {
    if (currentPage <= 0) dispatch(setCurrentPage(1));
    if (currentPage <= pages && currentPage >= 1) dispatch(setCurrentPage(currentPage - 1));
  };

  const onClickNext = () => {
    if (currentPage >= 0 && currentPage < pages) {
      dispatch(setCurrentPage(currentPage + 1));
    } else if (currentPage >= pages) {
      dispatch(setCurrentPage(currentPage));
    }
  };

  return (
    <div className="cards-wrapper">
      {pages > 0 && (
        <div className="pages-buttons">
          <button className="prev" onClick={onClickPrev}>
            prev
          </button>
          <span className="current-page">{currentPage}/</span>
          <span className="total-page">{pages}</span>
          <button className="next" onClick={onClickNext}>
            next
          </button>
        </div>
      )}
      <div className="cards">
        {isLoading ? (
            '...loading'
          // <TbLoader3 size={100} />
        ) : !searchError ? (
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
        ) : (
          <div className={'home-error'}>{searchError}</div>
        )}
        {/*{searchError && <div className={'home-error'}>{searchError}</div>}*/}
        {isVisibleModalCard && <Modal card={cardModal} closeModal={closeModal} />}
      </div>
    </div>
  );
};
