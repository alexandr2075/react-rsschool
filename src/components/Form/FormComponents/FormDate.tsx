import React, { Component, RefObject } from 'react';

type PropsDateInputType = {
  refDate: RefObject<HTMLInputElement>;
  errorDate: string;
};
class FormDate extends Component<PropsDateInputType> {
  render() {
    return (
      <>
        <label htmlFor="start">Date of birth:</label>

        <input type="date" id="start" name="trip-start" ref={this.props.refDate} />
        <p className="error-style">{this.props.errorDate}</p>
      </>
    );
  }
}

export default FormDate;
