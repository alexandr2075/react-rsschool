import React, { Component, RefObject } from 'react';

type PropsCheckboxInputType = {
  refCheckbox: RefObject<HTMLInputElement>;
  errorCheckbox: string;
};

class Checkbox extends Component<PropsCheckboxInputType> {
  render() {
    return (
      <>
        Consent to personal data processing:
        <label htmlFor="scales">
          <input type="checkbox" id="scales" name="scales" ref={this.props.refCheckbox} />I consent
          to the processing of my personal data
        </label>
        <p className="error-style">{this.props.errorCheckbox}</p>
      </>
    );
  }
}

export default Checkbox;
