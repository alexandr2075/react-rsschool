import React, { RefObject } from 'react';
import Header from '../components/Header/Header';

type StateAboutType = {
  name: string;
};

type PropsAboutType = object;
export default class AboutUs extends React.Component<PropsAboutType, StateAboutType> {
  myRef: RefObject<HTMLInputElement>;
  constructor(props: PropsAboutType) {
    super(props);
    this.state = {
      name: '',
    };
    this.onSubmitInput = this.onSubmitInput.bind(this);
    this.myRef = React.createRef();
  }

  // componentDidMount() {
  //   console.log('compDidMount');
  //   this.setState({ name: 'Hope' });
  // }

  onSubmitInput() {
    if (this.myRef.current) {
      this.setState({ name: this.myRef.current.value });
    }
    console.log('onSubmit');
    console.log(this.state);
  }

  render() {
    console.log('render: ', this.state);
    return (
      <div>
        <Header title={'About Us'} />
        <h1>{this.state.name}</h1>
        <input type="text" ref={this.myRef} />
        <input type="button" onClick={this.onSubmitInput} />
      </div>
    );
  }
}
