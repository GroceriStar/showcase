import React, { Component } from 'react'
import { List } from 'antd';
import shortid from 'shortid'

class Ingredients2 extends Component {

  render() {

    return (

      <List
        header={<div>Header</div>}
        bordered
        dataSource={this.props.data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />

    )
  }

}

export { Ingredients2 };
