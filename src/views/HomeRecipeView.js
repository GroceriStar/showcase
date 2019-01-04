import React, { Component } from 'react';

import Header   from "./../components/Header/Header";
import Cell     from "./../components/Cell/Cell";
import { Grid } from "mauerwerk";
import _        from "lodash";

import "antd/dist/antd.css";
import "./../styles.css";


import {
  getGroceryCollection,
  getRandomRecipe,
  getFirstFiveRecipes,
  getShowcaseFiveRecipes,
  getFiveRandomIngredients } from "./../selectors/selector";


// getGroceryCollection

class HomeRecipeView extends Component {

    state = {
      //Did we need it here? i think we didn use all data from this method
      // data: getShowcaseFiveRecipes(),
      data: getFirstFiveRecipes(),
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
    //     // console.log(id);
    //     return id;
    // }




// this will be a new version
    /*


      <Cell {...data}
        maximized={maximized}
        toggle={toggle}
        id={this.getId(data.name)}
      >

          <InsideLayout id={id} name={name} toggle={toggle}  />

      </Cell>

      */


  render() {

    // console.log( getGroceryCollection() )
    // console.log( getRandomRecipe() )
    // console.log( getShowcaseFiveRecipes() )


    //@TODO i don't like this structure...
    // we can use streight map or lodash map and have more recognizible logic.
    // here the test - did you figure out what this 3 lines doing without debug? me too :)
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    const data = this.state.data;





    // it's a bad way, but at least it make our Grid setup less over confusing.
    // so i'm checking
    const cellHeight = 200; // nobody knows but i assume it's 200px...
    // @TODO cover this later. right now it's not important. details upon request
    // if( this.state.height ){
    //   cellHeight = data[0].height
    // }
    // const cellHeight =

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
          keys={d => d.key}
          // Can be a fixed value or an individual data accessor
          // heights={this.state.height ? d => d.height : 200}
          heights={cellHeight}
          // Number of columns
          columns={this.state.columns}
          // Space between elements
          margin={this.state.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={true}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}
        >
          {(data, open, toggle) => { //console.log(data.recipe) ;
            return (
              <Cell {...data}
                open={open}
                toggle={toggle}
                id={data.key}
                name={data.recipe.title}
                type='recipe'
              />

          ) }}
        </Grid>
      </div>

    );
  }
}

export default HomeRecipeView;
