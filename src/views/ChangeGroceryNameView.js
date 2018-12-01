import React, { Component, Fragment } from 'react';

import { getGroceryCollection } from "./../selectors/selector.js";

//@TODO change Grocery List Name is a form
// current name -> Edit
// Form with input + submit button.

// also have an onSubmit method where we get all information together
// in order to send it further

const Form = ({}) => (
  <FormLayout />
);

const FormLayout = ({}) => (
  <Fragment>
  ... form elements will go here...
  </Fragment>
);


class ChangeGroceryNameView extends Component {


  render() {
    console.log( getGroceryCollection() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>

      </Fragment>
    );
  }
}

export default ChangeGroceryNameView;
