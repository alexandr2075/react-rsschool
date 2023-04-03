import React, { RefObject } from 'react';

type PropsDateInputType = {
  refDate: RefObject<HTMLInputElement>;
  errorDate: string;
};

function FormDate(props: PropsDateInputType) {
  return (
    <>
      <label htmlFor="start">Date of birth:</label>

      <input type="date" id="start" name="trip-start" ref={props.refDate} />
      <p className="error-style">{props.errorDate}</p>
    </>
  );
}

export default FormDate;
