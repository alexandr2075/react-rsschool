import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Card, CardPropsType } from '../../components/Card/Card';
import './Home.css';

type HomeStateType = {
  cards: Array<CardPropsType>;
  isLoading: boolean;
};

type HomePropsType = {};

type MemeType = {
  box_count: number;
  captions: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};

class Home extends Component<HomePropsType, HomeStateType> {
  constructor(props: HomeStateType) {
    super(props);
    this.state = {
      cards: [],
      isLoading: false,
    };
  }
  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch('https://api.imgflip.com/get_memes');
    const { data } = await response.json();
    const dataCards: Array<CardPropsType> = data.memes.map((item: MemeType) => ({
      name: item.name,
      url: item.url,
    }));
    this.setState({ cards: dataCards });
    this.setState({ isLoading: false });
  }
  render() {
    return (
      <div>
        <Header title={'Home'} />
        <div className="cards">
          {this.state.isLoading
            ? '...Loading'
            : this.state.cards.map((card) => {
                return <Card key={card.name} name={card.name} url={card.url} />;
              })}
        </div>
      </div>
    );
  }
}

export default Home;
