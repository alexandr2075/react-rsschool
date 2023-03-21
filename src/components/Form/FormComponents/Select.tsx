import React, { Component, RefObject } from 'react';

type PropsSelectInputType = {
  refSelect: RefObject<HTMLSelectElement>;
  errorSelect: string;
};
class Select extends Component<PropsSelectInputType> {
  render() {
    return (
      <label>
        I live in a country:
        <select ref={this.props.refSelect}>
          <option value="belarus">Belarus</option>
          <option value="ukraine">Ukraine</option>
          <option value="ukraine">Kazakhstan</option>
          <option value="russia">Russia</option>
          <option value="armenia">Armenia</option>
          <option value="georgia">Georgia</option>
          <option value="uzbekistan">Uzbekistan</option>
          <option value="kyrgyzstan">Kyrgyzstan</option>
        </select>
      </label>
    );
  }
}

export default Select;
