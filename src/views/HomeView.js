import React, { Component } from 'react';

import Header   from "./../components/Header/Header";
import Cell     from "./../components/Cell/Cell";
import { Grid } from "mauerwerk";
import _        from "lodash";

import "antd/dist/antd.css";
import "./../styles.css";


import { getGroceryCollection } from "./../selectors/selector.js";


class HomeView extends Component {

    state = {
      data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method
      columns: 2,
      margin: 70,
      filter: "",
      height: true
    };



    //@TODO move this stuff to header
    search = e => this.setState({ filter: e.target.value });
    shuffle = () =>
      this.setState(state => ({ data: _.shuffle(state.data) }));
    setColumns = e => this.setState({ columns: parseInt(e.key, 10) });
    setMargin = e => this.setState({ margin: parseInt(e.key, 10) });
    setHeight = e => this.setState({ height: e });




    grocery = [];
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

        console.log(id);
        return id;
    }



  render() {

    const data = this.state.data.filter(
      d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    );

    return (

      <div className="main">
        <Header
          {...this.state}
          search={this.search}
          shuffle={this.shuffle}
          setColumns={this.setColumns}
          setMargin={this.setMargin}
          setHeight={this.setHeight}
        />

        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={this.state.height ? d => d.height : 200}
          // Number of columns
          columns={this.state.columns}
          // Space between elements
          margin={this.state.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={true}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}
        >
          {(data, maximized, toggle) => (
              <Cell {...data}
                maximized={maximized}
                toggle={toggle}
                id={this.getId(data.name)}
              />
          )}
        </Grid>
      </div>

    );
  }
}

export default HomeView;
