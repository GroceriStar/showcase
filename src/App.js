import React, { Component } from "react";


import "antd/dist/antd.css";

import HomeView from "./views/HomeView";




//@TODO add "reworm" https://github.com/pedronauck/reworm
//@TODO update and make it clear. we have a lot of data here. it's not cool

class App extends Component {


  //
  // state = {
  //   data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method
  //   columns: 2,
  //   margin: 70,
  //   filter: "",
  //   height: true
  // };
  //
  //
  //
  // //@TODO move this stuff to header
  // search = e => this.setState({ filter: e.target.value });
  // shuffle = () =>
  //   this.setState(state => ({ data: _.shuffle(state.data) }));
  // setColumns = e => this.setState({ columns: parseInt(e.key, 10) });
  // setMargin = e => this.setState({ margin: parseInt(e.key, 10) });
  // setHeight = e => this.setState({ height: e });
  //
  //
  //
  //
  // grocery = [];
  // currentId = 1;
  //
  //
  // // @TODO change this. I really don't like this method
  // getId(name){
  //   var foundObj = {};
  //     if (this.grocery.length > 0) {
  //       foundObj = this.grocery.find((obj) =>  {
  //         if(obj.name === name) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       });
  //     }
  //
  //     let id = null;
  //
  //     if (_.isEmpty(foundObj)) {
  //       this.grocery.push({
  //         "name": name,
  //         "id": this.currentId
  //       })
  //       id = this.currentId++;
  //       // return this.currentId++;
  //     } else {
  //       id = foundObj.id;
  //       // return foundObj.id;
  //     }
  //
  //     console.log(id);
  //     return id;
  // }
  //
  //



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
