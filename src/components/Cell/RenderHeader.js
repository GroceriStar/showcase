import React, {
  Component,
} from 'react'
// import { Link } from 'react-router-dom'

import { Button, Icon, Layout, Row, Col } from 'antd'


// import { RenderGrocery } from '../RenderGrocery/RenderGrocery'


import TileLayout from '../TileLayout/TileLayout'


import { GeneratePDFButton } from '../GroceryListToPDF'
import { GeneratePDFButton2 } from '../GroceryListToPDF'
import { GeneratePDFButton3 } from '../GroceryListToPDF'

import { getFullGrocery } from '../../selectors/selector';
import RenderFooter from './RenderFooter'
import RenderContent from './RenderContent';
const { Header, Footer, Content } = Layout;

class RenderHeader extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  // if (this.props.name !== nextProps.name || this.props.toggle !== nextProps.toggle) {
  //   console.log("Name and Id RenderFooter **********************");
  //       return true;
  //     }
  //     console.log("False RenderFooter****************************");
  //     return false;
  //   }
  render(){
    return (
      <Header style={{
      // background: '#fff',
      // color:'red',
      //padding: 0
      fontSize: '20px'
  }}>


      <Row>
        <Col span={20}>
          "{this.props.name}" Template
        </Col>
        <Col span={4}>

          <Icon
            className="tile-close"
            type="close"
            style={{ cursor: "pointer", transition: "color .3s" }}
            onClick={this.props.toggle}
          />

        </Col>
      </Row>

    </Header>)
  }
}

export default RenderHeader;
