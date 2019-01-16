import React, {
  Component, PureComponent
} from 'react';

import { Button, Icon, Layout, Row, Col } from 'antd'



//@TODO it should be an updated we don't need to import three buttons, just because we pass a different layout to exporter


import { GeneratePDFButton } from '@groceristar/pdf-export';

//
// import { GeneratePDFButton } from '../GroceryListToPDF'
// import { GeneratePDFButton2 } from '../GroceryListToPDF'
// import { GeneratePDFButton3 } from '../GroceryListToPDF'

import { getFullGrocery } from '../../selectors/selector';


import RenderContent from './RenderContent';
const { Footer } = Layout;

// @TODO replace this with a links, related to react-router
function getLink( id ){
  return '/grocery/'+ id;
}

class RenderFooter extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  // if (this.props.name !== nextProps.name || this.props.id !== nextProps.id) {
  //   console.log("Name and Id RenderFooter **********************");
  //       return true;
  //     }
  //     console.log("False RenderFooter****************************");
  //     return false;
  //   }

  render() {
    const { name, id } = this.props;
    const data = getFullGrocery(name);
    return (
      <Footer style={{ textAlign: 'center' }}>


        <Row gutter={16}>
          <Col className="gutter-row" span={6}>

              {/* Should we really pass the name? or this is just because we don't have a propper ids here?
              If yes, then we should make it clear, so later we'll be able to
              @TODO bad layout here - we need to overmake it as possible - right now it's just working*/}

              <GeneratePDFButton type={'PDF1'} name={name} data={data}  />
          </Col>
          <Col className="gutter-row" span={6}>
              <GeneratePDFButton type={'PDF2'} name={name} data={data} />
          </Col>
          <Col className="gutter-row" span={6}>
              <GeneratePDFButton type={'PDF3'} name={name} data={data} />
          </Col>
          <Col className="gutter-row" span={6}>
            <Button
              type="primary"
              icon="right"
              size="large"
              href={getLink(id)}>
                View "{name}"
            </Button>
          </Col>
        </Row>


      </Footer>
    )
  }
}

export default RenderFooter;
