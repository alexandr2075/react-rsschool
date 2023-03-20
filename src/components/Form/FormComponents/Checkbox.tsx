import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <fieldset>
        <legend>Consent to personal data processing:</legend>

        <div>
          <input type="checkbox" id="scales" name="scales" defaultChecked />
          <label htmlFor="scales">I consent to the processing of my personal data</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">I do not consent to the processing of my personal data</label>
        </div>
      </fieldset>
    );
  }
}

export default Checkbox;
