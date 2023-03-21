import React, { Component } from 'react';
import './SearchBar.css';

type StateType = {
  value: string;
};

type PropsType = object;

class SearchBar extends Component<PropsType, StateType> {
  constructor(props: StateType) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const input = localStorage.getItem('input');
    if (input) {
      this.setState({ value: input });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('input', this.state.value);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  onSearch() {
    if (this.state.value) {
      localStorage.setItem('input', this.state.value);
    }
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="search-block">
        <input
          type="text"
          className="search"
          value={this.state.value}
          onChange={this.onChange}
          autoFocus={true}
        />
        <button className="search-btn" onClick={() => this.onSearch()}>
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
