import React, { Component, LegacyRef, RefObject } from 'react';

type PropsTextInputType = {
  refText: RefObject<HTMLInputElement>;
};
class FormText extends Component<PropsTextInputType> {
  render() {
    return (
      <>
        <label htmlFor="name">Name (4 to 8 characters):</label>

        <input
          type="text"
          id="name"
          name="name"
          ref={this.props.refText}
          required
          minLength={4}
          maxLength={8}
          size={10}
        />
      </>
    );
  }
}

export default FormText;
