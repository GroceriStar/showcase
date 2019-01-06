import React, {
  Component
} from 'react'


import TileLayout from '../TileLayout/TileLayout'

import { GeneratePDFButton } from '../GroceryListToPDF'


import { getFullGrocery } from '../../selectors/selector';
import uuidv1 from 'uuid/v1';
import { IngredientList, DefaultList } from '@groceristar/grocery-component';

import { getRecipeLink } from '../../Router';

import { Button, Icon, Layout, Row, Col, Table } from 'antd'

const { Header, Footer, Content } = Layout;

class RecipeHeader extends Component {
  // shouldComponentUpdate(nextProps) {
  // if (this.props.title !== nextProps.title || this.props.toggle !== nextProps.toggle) {
  //   console.log("Name and Id RenderFooter **********************");
  //       return true;
  //     }
  //     console.log("False RenderFooter****************************");
  //     return false;
  //   }
  render(){
    return(
      <Header style={{
        // background: '#fff',
        // color:'red',
        //padding: 0
        fontSize: '20px'
    }}>
        <Row>
          <Col span={20}>

                    "{this.props.title}" Template
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

      </Header>
    )
  }
}
export default RecipeHeader;
