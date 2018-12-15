import React, { Component } from "react";

import {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId
} from "../../selectors/selector";

import DepartmentList from '../DepartmentList/DepartmentList';
import DepartmentListCollapse from '../DepartmentList/DepartmentListCollapse';

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.


// if we want to use antd styles we should include them
import "antd/dist/antd.css";

class RenderGroceryById extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10)
    }
  }

  render() {



export default RenderGroceryById;
