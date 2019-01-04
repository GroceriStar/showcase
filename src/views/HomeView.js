import React, { Component } from 'react';

import Menu     from "./../components/Header/Menu";

// import Header   from "./../components/Header/Header";
import Cell     from "./../components/Cell/Cell";
import { Grid } from "mauerwerk";
import _        from "lodash";

import "antd/dist/antd.css";
import "./../styles.css";


// @TODO i want to have a separation.
// right now to grid we're passing all stuff that we have for grocery lists,
// but we only need major things like id and title, usually.
// it's better to fetch additional data, related to one single list only when we open a tile...
// it's also not necessary, becausee we're passing only id to InsideLayout component.
// but what we should pass into InsideLayout it's also debatable. because we're overweight it right now


import { getGroceryCollection } from "./../selectors/selector";


class HomeView extends Component {

    state = {
      data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method
      columns: 2,
      margin: 70,
      filter: "",
      height: true
    };



    //@TODO move this stuff to header
    search  = e => this.setState({ filter: e.target.value });
    shuffle = () =>
      this.setState(state => ({ data: _.shuffle(state.data) }));

    setColumns = e => this.setState({ columns: parseInt(e.key, 10) });
    setMargin  = e => this.setState({ margin: parseInt(e.key, 10) });
    setHeight  = e => this.setState({ height: e });




    grocery   = [];
    currentId = 1;


    // @TODO change this. I really don't like this method
    getId(name){
      var foundObj = {};
        if (this.grocery.length > 0) {
          foundObj = this.grocery.find((obj) =>  {
            if(obj.name === name) {
              return true;
            } else {
              return false;
            }
          });
        }

        let id = null;

        if (_.isEmpty(foundObj)) {
          this.grocery.push({
            "name": name,
            "id": this.currentId
          })
          id = this.currentId++;
          // return this.currentId++;
        } else {
          id = foundObj.id;
          // return foundObj.id;
        }

        // console.log(id);
        return id;
    }



  render() {

    // console.log(this.state.data);
    //@TODO i don't like this structure...
    // we can use streight map or lodash map and have more recognizible logic.
    // here the test - did you figure out what this 3 lines doing without debug? me too :)
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );
    //
    // console.log(data);

    const data = this.state.data;

    return (

      <div className="main">

        <Menu />

{/*
        <Header
          {...this.state}
          search={this.search}
          shuffle={this.shuffle}
          setColumns={this.setColumns}
          setMargin={this.setMargin}
          setHeight={this.setHeight}
        />
 */}



        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={this.state.height ? d => d.height : 200} //@TODO update it L(
          // Number of columns
          columns={this.state.columns}
          // Space between elements
          margin={this.state.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={true}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}
        >
          {(data, open, toggle) => (
              <Cell {...data}
                open={open}
                toggle={toggle}
                id={this.getId(data.name)}
                type='grocery-list'
              />
          )}
        </Grid>
      </div>

    );
  }
}

export default HomeView;
