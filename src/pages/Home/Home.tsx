import React from 'react';
import Header from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import './Home.css';
import { DataType } from '../../components/Layout/Layout';
import { useOutletContext } from 'react-router-dom';

type OutletContextType = {
  cards: Array<DataType>;
  isLoading: boolean;
};

export const Home = () => {
  const { cards, isLoading } = useOutletContext<OutletContextType>();

  return (
    <div>
      <Header title={'Home'} />
      <div className="cards">
        {isLoading
          ? '..Loading'
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
