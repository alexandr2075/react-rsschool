import React, { RefObject } from 'react';

type PropsFileInputType = {
  refFile: RefObject<HTMLInputElement>;
  errorFile: string;
};

function FileInput(props: PropsFileInputType) {
  return (
    <>
      <label htmlFor="avatar">Choose a profile picture:</label>

      <input type="file" id="avatar" data-testid="avatar" name="avatar" ref={props.refFile} />
      <p className="error-style">{props.errorFile}</p>
    </>
  );
}

export default FileInput;
