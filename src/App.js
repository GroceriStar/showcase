import React, { Component } from "react";


// @TODO maybe we should an update and put here a router instead of HomeView?
import HomeView from "./views/HomeView";




//@TODO add "reworm" https://github.com/pedronauck/reworm
//@TODO update and make it clear. we have a lot of data here. it's not cool

class App extends Component {


  render() {

    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );


    // console.log(data);
    return (

      <Fragment>
        
        <HomeView />
      </Fragment>

    );
  }
}

export default App;
