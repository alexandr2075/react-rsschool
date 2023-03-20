import React, { Component } from 'react';

class Switcher extends Component {
  render() {
    return (
      <fieldset>
        <legend>Gender:</legend>

        <div>
          <input type="radio" id="man" name="gender" value="man" defaultChecked />
          <label htmlFor="man">Man</label>
        </div>

        <div>
          <input type="radio" id="woman" name="gender" value="woman" />
          <label htmlFor="woman">Woman</label>
        </div>

        <div>
          <input type="radio" id="it" name="gender" value="it" />
          <label htmlFor="it">It</label>
        </div>
      </fieldset>
    );
  }
}

export default Switcher;
