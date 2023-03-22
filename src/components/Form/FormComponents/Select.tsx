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
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Kazakhstan" defaultChecked>
            Kazakhstan
          </option>
          <option value="Russia">Russia</option>
          <option value="Armenia">Armenia</option>
          <option value="Georgia">Georgia</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
        </select>
      </label>
    );
  }
}

export default Select;
