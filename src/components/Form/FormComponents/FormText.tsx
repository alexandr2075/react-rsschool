import React, { Component, RefObject } from 'react';

type PropsTextInputType = {
  errorName: string;
  refText: RefObject<HTMLInputElement>;
};
class FormText extends Component<PropsTextInputType> {
  render() {
    return (
      <>
        <label htmlFor="name">Name (4 to 8 characters):</label>

        <input type="text" id="name" name="name" ref={this.props.refText} required size={10} />
        <p className="error-style">{this.props.errorName}</p>
      </>
    );
  }
}

export default FormText;
