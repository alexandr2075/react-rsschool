import React, { Component, RefObject } from 'react';

type PropsSwitcherInputType = {
  refSwitcher: RefObject<HTMLInputElement>;
  errorGender: string;
};

class Switcher extends Component<PropsSwitcherInputType> {
  render() {
    return (
      <fieldset>
        <legend>Gender:</legend>

        <div>
          <input
            type="radio"
            id="man"
            name="gender"
            value="man"
            ref={this.props.refSwitcher}
            defaultChecked
          />
          <label htmlFor="man">Man</label>
        </div>

        <div>
          <input type="radio" id="woman" name="gender" value="woman" />
          <label htmlFor="woman">Woman</label>
        </div>
      </fieldset>
    );
  }
}

export default Switcher;
