import React, { RefObject } from 'react';

type PropsSwitcherInputType = {
  refSwitcher: RefObject<HTMLInputElement>;
  errorGender: string;
};

function Switcher(props: PropsSwitcherInputType) {
  return (
    <fieldset>
      <legend>Gender:</legend>

      <div>
        <input
          type="radio"
          id="man"
          name="gender"
          value="man"
          ref={props.refSwitcher}
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

export default Switcher;
