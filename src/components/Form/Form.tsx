import React, { Component, FormEvent, RefObject } from 'react';
import './Form.css';
import Switcher from './FormComponents/Switcher';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormText from './FormComponents/FormText';
import Select from './FormComponents/Select';
import FileInput from './FormComponents/FileInput';

type StateFormType = {
  name: string | boolean;
};

type PropsFormType = object;

class Form extends Component<PropsFormType, StateFormType> {
  private inputText: RefObject<HTMLInputElement> = React.createRef();
  private inputDate: RefObject<HTMLInputElement> = React.createRef();
  private inputCheckbox: RefObject<HTMLInputElement> = React.createRef();
  private inputSwitcher: RefObject<HTMLInputElement> = React.createRef();
  private inputSelect: RefObject<HTMLInputElement> = React.createRef();
  private inputFile: RefObject<HTMLInputElement> = React.createRef();
  constructor(props: PropsFormType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (this.inputText.current) {
      console.log(this.inputText.current.value);
      console.log(this.inputDate.current!.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Form</h1>

          <FormText refText={this.inputText} />
          <FormDate refDate={this.inputDate} />
          <Checkbox refCheckbox={this.inputCheckbox} />
          <Switcher refSwitcher={this.inputSwitcher} />
          <Select refSelect={this.inputSelect} />
          <FileInput refFile={this.inputFile} />

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Form;
