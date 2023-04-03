import React, { Component } from 'react';
import './Header.css';

type HeaderPropsType = {
  title: string;
};
class Header extends Component<HeaderPropsType> {
  constructor(props: { title: string }) {
    super(props);
  }
  render() {
    return <div className={'header'}>{this.props.title}</div>;
  }
}

export default Header;
