import React, { Component } from "react";
import Item from './Item.js';
import shortid from "shortid";

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.






class DepartmentList extends Component {

  constructor(props){
    super(props);
    // this.state = {
    //
    // }
  }
  {/* maybe we can create a statement,
    when if we don't have id field - then we use a shordid */}
  render() {
    <ul>
      {collection.map(item => (
        
        <Item
          department={item.department}
          ingredients={item.ingredients}
          key={shortid.generate()}
          />
      ))}
    </ul>
  }

}

export default DepartmentList;
