import React, { Component, Fragment } from "react";



import { Router } from './Router';



//@TODO add "reworm" https://github.com/pedronauck/reworm


class App extends Component {


  render() {

    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );


    // console.log(data);
    return (

      <Fragment>

        <Router />
      </Fragment>

    );
  }
}

export default App;
