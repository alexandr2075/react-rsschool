import React, { RefObject } from 'react';

type PropsTextInputType = {
  errorName: string;
  refText: RefObject<HTMLInputElement>;
};

function FormText(props: PropsTextInputType) {
  return (
    <>
      <label htmlFor="name">Name (4 to 15 characters):</label>

      <input type="text" id="name" name="name" ref={props.refText} size={10} />
      <p className="error-style">{props.errorName}</p>
    </>
  );
}

export default FormText;
