import React, { Component } from "react";
import lodash from "lodash";
import Header from "./components/Header/Header";
import { Grid } from "mauerwerk";

import "antd/dist/antd.css";
import "./styles.css";

import gf from "@groceristar/groceristar-fetch/groceristar";
// import './App.css';

import Cell from "./components/Cell/Cell";

//@todo add "reworm" https://github.com/pedronauck/reworm

class App extends Component {
  state = {
    data: gf.getGroceryShowcase(),
    columns: 2,
    margin: 70,
    filter: "",
    height: true
  };
  search = e => this.setState({ filter: e.target.value });
  shuffle = () =>
    this.setState(state => ({ data: lodash.shuffle(state.data) }));
  setColumns = e => this.setState({ columns: parseInt(e.key, 10) });
  setMargin = e => this.setState({ margin: parseInt(e.key, 10) });
  setHeight = e => this.setState({ height: e });

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
              <Cell {...data} maximized={maximized} toggle={toggle} id={data.id + 10}/>
          )}
        </Grid>
      </div>
    );
  }
}

export default App;
