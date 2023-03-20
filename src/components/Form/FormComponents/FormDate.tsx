import React, { Component, RefObject } from 'react';

type PropsDateInputType = {
  refDate: RefObject<HTMLInputElement>;
};
class FormDate extends Component<PropsDateInputType> {
  render() {
    return (
      <>
        <label htmlFor="start">Today date:</label>

        <input
          type="date"
          id="start"
          name="trip-start"
          defaultValue="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
          ref={this.props.refDate}
        />
      </>
    );
  }
}

export default FormDate;
