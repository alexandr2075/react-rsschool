import React, { Component, FormEvent, RefObject } from 'react';
import './Form.css';
import Switcher from './FormComponents/Switcher';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormText from './FormComponents/FormText';
import Select from './FormComponents/Select';
import FileInput from './FormComponents/FileInput';
import FormCard, { PropsFormCardType } from './FormComponents/FormCard/FormCard';

type StateFormType = {
  errorName: string;
  errorDate: string;
  errorCheckbox: string;
  errorGender: string;
  errorSelect: string;
  errorFile: string;
  isMessageDoneVisible: boolean;
  isFormCardVisible: boolean;
  cards: Array<PropsFormCardType>;
};

type PropsFormType = object;

class Form extends Component<PropsFormType, StateFormType> {
  inputText: RefObject<HTMLInputElement> = React.createRef();
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
      isMessageDoneVisible: false,
      isFormCardVisible: false,
      cards: [],
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

    if (this.inputFile.current) {
      this.setState({
        isFormCardVisible: true,
        isMessageDoneVisible: true,
        cards: [
          ...this.state.cards,
          {
            src: URL.createObjectURL(this.inputFile.current!.files![0]),
            name: this.inputText.current!.value,
            birth: this.inputDate.current!.value,
            gender: this.inputSwitcher.current!.checked ? 'Man' : 'Woman',
            country: this.inputSelect.current!.value,
          },
        ],
      });

      this.inputText.current!.value = '';
      this.inputDate.current!.value = '';
      this.inputCheckbox.current!.checked = true;
      this.inputSwitcher.current!.checked = true;
      this.inputSelect.current!.value = '';
      this.inputFile.current!.value = '';

      setTimeout(() => {
        this.setState({ isMessageDoneVisible: false });
      }, 2000);
    }
  }

  validationName() {
    const len = this.inputText.current!.value.length;
    if (len && len >= 4 && len < 16) {
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
    if (this.inputFile.current!.value) {
      this.setState({ errorFile: '' });
    } else {
      this.setState({ errorFile: 'Please select a file' });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className={'form-wrapper'}>
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Form</h1>

          <FormText errorName={this.state.errorName} refText={this.inputText} />
          <FormDate errorDate={this.state.errorDate} refDate={this.inputDate} />
          <Checkbox errorCheckbox={this.state.errorCheckbox} refCheckbox={this.inputCheckbox} />
          <Switcher errorGender={this.state.errorGender} refSwitcher={this.inputSwitcher} />
          <Select errorSelect={this.state.errorSelect} refSelect={this.inputSelect} />
          <FileInput errorFile={this.state.errorFile} refFile={this.inputFile} />

          <input type="submit" value="Submit" style={{ padding: 5 }} />
          {this.state.isMessageDoneVisible && <p className="message-done">Data has been saved</p>}
        </form>
        {this.state.isFormCardVisible && (
          <div className="form-cards">
            {this.state.cards.map((card, index) => {
              return (
                <FormCard
                  key={index}
                  src={card.src}
                  name={card.name}
                  birth={card.birth}
                  gender={card.gender}
                  country={card.country}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Form;
