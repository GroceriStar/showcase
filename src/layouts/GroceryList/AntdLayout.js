import React, { Component } from "react";

import {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId
} from "../../selectors/selector";


import DepartmentListCollapse from '../../components/DepartmentList/DepartmentListCollapse'

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.


class AntdLayout extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: []
    }
  }

async componentDidMount(){
  // let grocery = getGroceryById(this.state.id)[0];
  // let groceryName = grocery.name;
  try{
    let response = await getGroceryDataFromId(this.state.id);
      this.setState({
            data: response.data
          })
      } catch (e) {
          console.error("Can't connect to Database");
  }

}

  render() {

    // @TODO maybe we can move this things into selectors?
    // let grocery = getGroceryById(this.state.id)[0];
    // let groceryName = grocery.name;
    // let groceryWithDepAndIng = getFullGrocery(groceryName);
console.log(this.state.data);
//     let groceryWithDepAndIng = getGroceryDataFromId(this.state.id);
    // let departmentsCollection = getGroceryDataFromId(this.state.id);

    return (
      <div>
        <DepartmentListCollapse collection={this.state.data} />
      </div>
    );
  }
}

export default AntdLayout;
