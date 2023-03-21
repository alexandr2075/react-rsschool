import React, { Component, FormEvent, RefObject } from 'react';
import './Form.css';
import Switcher from './FormComponents/Switcher';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormText from './FormComponents/FormText';
import Select from './FormComponents/Select';
import FileInput from './FormComponents/FileInput';

type StateFormType = {
  errorName: string;
  errorDate: string;
  errorCheckbox: string;
  errorGender: string;
  errorSelect: string;
  errorFile: string;
};

type PropsFormType = object;

class Form extends Component<PropsFormType, StateFormType> {
  private inputText: RefObject<HTMLInputElement> = React.createRef();
  private inputDate: RefObject<HTMLInputElement> = React.createRef();
  private inputCheckbox: RefObject<HTMLInputElement> = React.createRef();
  private inputSwitcher: RefObject<HTMLInputElement> = React.createRef();
  private inputSelect: RefObject<HTMLSelectElement> = React.createRef();
  private inputFile: RefObject<HTMLInputElement> = React.createRef();
  constructor(props: PropsFormType) {
    super(props);
    this.state = {
      errorName: '',
      errorDate: '',
      errorCheckbox: '',
      errorGender: '',
      errorSelect: '',
      errorFile: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validationName();
    this.validationDate();
    this.validationCheckbox();
    this.validationCheckbox();
    this.validationFile();
  }

  validationName() {
    const len = this.inputText.current!.value.length;
    if (len && len >= 4 && len < 9) {
      this.setState({ errorName: '' });
    } else {
      this.setState({ errorName: 'Please lengthen this text to 4 characters or more' });
    }
  }

  validationDate() {
    if (this.inputDate.current!.value) {
      this.setState({ errorDate: '' });
    } else {
      this.setState({ errorDate: 'Please enter date of birth' });
    }
  }

  validationCheckbox() {
    if (this.inputCheckbox.current!.checked) {
      this.setState({ errorCheckbox: '' });
    } else {
      this.setState({ errorCheckbox: 'Please accept the agreement' });
    }
  }
  validationFile() {
    console.log(this.inputFile);
    if (this.inputFile.current!.value) {
      this.setState({ errorFile: '' });
    } else {
      this.setState({ errorFile: 'Please select a file' });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Form</h1>

          <FormText errorName={this.state.errorName} refText={this.inputText} />
          <FormDate errorDate={this.state.errorDate} refDate={this.inputDate} />
          <Checkbox errorCheckbox={this.state.errorCheckbox} refCheckbox={this.inputCheckbox} />
          <Switcher errorGender={this.state.errorGender} refSwitcher={this.inputSwitcher} />
          <Select errorSelect={this.state.errorSelect} refSelect={this.inputSelect} />
          <FileInput errorFile={this.state.errorFile} refFile={this.inputFile} />

          <input type="submit" value="Submit" style={{ padding: 5 }} />
        </form>
      </>
    );
  }
}

export default Form;
// if (!this.fileInput.current?.files[0].name) {
//   return;
// }
// const path = this.fileInput.current?.files[0];
// console.log(path);
// console.log(URL.createObjectURL(path));
// this.setState({ source: URL.createObjectURL(path) });
