import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Card, UrlsType } from '../../components/Card/Card';
import './Home.css';
import { ACCESS_KEY } from '../../../constants';

type DataType = {
  id?: string;
  alt_description: string;
  created_at?: string;
  likes?: number;
  urls: UrlsType;
};

export const Home = () => {
  const [cards, setCards] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
    setIsLoading(false);
  }, [cards]);

  return (
    <div>
      <Header title={'Home'} />
      <div className="cards">
        {isLoading
          ? '...Loading'
          : cards.map((card) => {
              return (
                <Card key={card.id} description={card.alt_description} url={card.urls.small} />
              );
            })}
      </div>
    </div>
  );
};

export default Home;
