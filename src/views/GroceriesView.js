import React, { Component, Fragment } from 'react'
// import _ from 'lodash'
import { Modal, Button } from 'antd';


import {
  getGroceryCollection
} from "./../selectors/selector.js"


// @TODO change modals to async versions https://github.com/ant-design/ant-design/edit/master/components/modal/demo/async.md


import { GroceryList } from '@groceristar/grocery-component'

class GroceriesView extends Component {

  constructor(props) {
    super(props);

    this.state = { visible: false };

    this.showModal    = this.showModal.bind(this);

    this.handleOk     = this.handleOk.bind(this);

    this.handleCancel = this.handleCancel.bind(this);
  }

  // state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }


  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {

    const collection = getGroceryCollection();
    console.log(collection);
    // console.log( getAllGrocery() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>

      <GroceryList items={collection} />
      {/*}
        <Button type="primary" onClick={this.showModal}>
           Open Modal that we want to compare with previous version
         </Button>




         */}



  {/*}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
 */}

      </Fragment>
    );
  }
}

export default GroceriesView;
