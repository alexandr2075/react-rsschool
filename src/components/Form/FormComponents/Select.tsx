import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <label>
        Pick your favorite flavor:
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
    );
  }
}

export default Select;
