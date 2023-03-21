import React, { Component, RefObject } from 'react';

type PropsFileInputType = {
  refFile: RefObject<HTMLInputElement>;
  errorFile: string;
};

class FileInput extends Component<PropsFileInputType> {
  constructor(props: PropsFileInputType) {
    super(props);
  }

  render() {
    return (
      <>
        <label htmlFor="avatar">Choose a profile picture:</label>

        <input type="file" id="avatar" name="avatar" ref={this.props.refFile} />
        <p className="error-style">{this.props.errorFile}</p>
      </>
    );
  }
}

export default FileInput;
