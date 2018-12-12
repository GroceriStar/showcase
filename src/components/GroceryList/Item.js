import React, {
  Component
} from 'react'

import DepartmentList from '../DepartmentList/DepartmentList'


// This component are layout for displaying data inside of the department list

// @TODO i think we should change the name, because i think we have a list item, that store departments information.
// it should explain things better, but i'm not sure if i have a better name for it. Maybe FullDepartmentData or DepartmentDataFull
// and we'll be able to have a short department data as well, if we need it

// @TODO this item has an old approach that we have, when we generate a lists.
// right now we have a RenderItem at lists, as component, related to items.
// so maybe we should update this component. not sure right now, don't remember about where we using it
class Item extends Component {

  render() {
    // <DepartmentList departments={this.props.departments} />
    return (
      <li key={this.props.key}>
        <h2>
          {this.props.name}
        </h2>
        <DepartmentList items={this.props.departments} />


      </li>
    );
  }
}
// @TODO i think we can use this.props.key, but on parent component
// we can pass a shortid.generate
// so our small component will be clean and don't require changes, when
// we'll connect data and id from database

export default Item;
