import React, { RefObject } from 'react';

type PropsCheckboxInputType = {
  refCheckbox: RefObject<HTMLInputElement>;
  errorCheckbox: string;
};

function Checkbox(props: PropsCheckboxInputType) {
  return (
    <>
      Consent to personal data processing:
      <label htmlFor="scales">
        <input type="checkbox" id="scales" name="scales" ref={props.refCheckbox} />I consent to the
        processing of my personal data
      </label>
      <p className="error-style">{props.errorCheckbox}</p>
    </>
  );
}

export default Checkbox;
