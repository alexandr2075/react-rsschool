import React, { Component, FormEvent } from 'react';

type StateFileInputType = {
  source: string;
};

type PropsFileInputType = object;

class FileInput extends Component<PropsFileInputType, StateFileInputType> {
  private fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: PropsFileInputType) {
    super(props);
    this.state = {
      source: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!this.fileInput.current?.files[0].name) {
      return;
    }
    const path = this.fileInput.current?.files[0];
    console.log(path);
    console.log(URL.createObjectURL(path));
    this.setState({ source: URL.createObjectURL(path) });
    // alert(`Selected file - ${this.fileInput.current}`);
  }

  render() {
    return (
      <>
        <label htmlFor="avatar">Choose a profile picture:</label>

        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      </>
    );
  }
}

export default FileInput;
