import React, {
	Component,
} from 'react';
import uuidv1 from 'uuid/v1';
import { IngredientList, DefaultList } from '@groceristar/grocery-component';

import {
	Button, Icon, Layout, Row, Col, Table,
} from 'antd';







import TileLayout from '../TileLayout/TileLayout';






import { GeneratePDFButton } from '../GroceryListToPDF';











import { getFullGrocery } from '../../selectors/selector';

import { getRecipeLink } from '../../Router';


const { Header, Footer, Content } = Layout;


// @TODO update this component by moving out styles.
// example
const cssHeader = {
	// background: '#fff',
	// color:'red',
	// padding: 0
	fontSize: '20px',
};

const iconStyle = { cursor: 'pointer', transition: 'color .3s' };
// <Header style={cssHeader} />

class RecipeHeader extends Component {
	// shouldComponentUpdate(nextProps) {
	// if (this.props.title !== nextProps.title || this.props.toggle !== nextProps.toggle) {
	//   console.log("Name and Id RenderFooter **********************");
	//       return true;
	//     }
	//     console.log("False RenderFooter****************************");
	//     return false;
	//   }
	render() {
		return (
		  <Header style={cssHeader}>
        <Row>
        <Col span={20}>
          "{this.props.title}" Template
        </Col>
        <Col span={4}>

        <Icon
          className="tile-close"
          style={iconStyle}
          type="close"
          onClick={this.props.toggle}
        />

          </Col>
				</Row>

			</Header>
		);
	}
}
export default RecipeHeader;
