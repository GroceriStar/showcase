import React, { Component } from 'react'

import { Menu, Icon, Modal, Button } from 'antd'



import { Link } from 'react-router-dom'

// import AddRecipe from './AddRecipe'
//@TODO yes - we need to change that
class Menuu extends Component {
  state = {
    current: 'app',
    visible: false
  }
  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="app">
          <Icon type="appstore" />
            Grocery Lists collection
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="add">
          <Icon type="appstore" />
          Plain Data
          <Link to="/groceries" />
        </Menu.Item>
        <Menu.Item key="alipay">

          <div onClick={this.showModal}>
            <Icon type="plus-square" />Add Grocery List Modal
          </div>

          <Modal
            title="Add Grocery List "
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" size="large" onClick={this.handleCancel}>
                Cancel
              </Button>
            ]}
          >

            { /* <AddRecipe handleOk={this.handleOk} /> */}

          </Modal>

        </Menu.Item>
      </Menu>
    )
  }
}

export default Menuu
