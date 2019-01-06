import React, { Component } from 'react'
import { List } from 'antd';

// import uuidv1 from 'uuid/v1';
// https://ant.design/components/list/


class IngredientCustomList extends Component {

  render() {

    const { department, ingredients } = this.props;

    return (
      <List
        header={<div>{department}</div>}
        bordered
        dataSource={ingredients}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />

    )
  }

}

export default IngredientCustomList;
