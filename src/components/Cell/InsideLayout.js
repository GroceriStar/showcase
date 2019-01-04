import React, {
  Component
} from 'react'
// import { Link } from 'react-router-dom'

import { Button, Icon, Layout, Row, Col } from 'antd'


// import { RenderGrocery } from '../RenderGrocery/RenderGrocery'


import TileLayout from '../TileLayout/TileLayout'


import { GeneratePDFButton } from '../GroceryListToPDF'
import { GeneratePDFButton2 } from '../GroceryListToPDF'
import { GeneratePDFButton3 } from '../GroceryListToPDF'

import { getFullGrocery } from '../../selectors/selector';


const { Header, Footer, Content } = Layout;

// @TODO replace this with a links, related to react-router
function getLink( id ){
  return '/grocery/'+ id;
}

// @TODO update this component by moving out styles.
// example
// const cssHeader = {
//   // background: '#fff',
//   // color:'red',
//   //padding: 0
//   fontSize: '20px'
// }
// <Header style={cssHeader} />


class InsideLayout extends Component {

  // constructor(props) {
  //   super(props);
  //   // maybe we should add to state some default stuff and then check on mount if data,
  //   // that we used was passed into this component
  //   // this.state = {
  //   //   counter
  //   // }
  //
  // }

  render() {

    const { name, toggle, id } = this.props;

    return (
      <Layout>
        <Header style={{
          // background: '#fff',
          // color:'red',
          //padding: 0
          fontSize: '20px'
      }}>


          <Row>
            <Col span={20}>
              "{name}" Template
            </Col>
            <Col span={4}>

              <Icon
                className="tile-close"
                type="close"
                style={{ cursor: "pointer", transition: "color .3s" }}
                onClick={toggle}
              />

            </Col>
          </Row>

        </Header>
        <Content style={{ margin: '24px 16px 0', fontSize: '14px' }}>


          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            {/* @TODO the problem here - we need to connect selectors and pass `name` variable here. it's not cool and not- reusable */}

            {/* old version: /* Should we really pass the name? or this is just because we don't have a propper ids here?
            If yes, then we should make it clear, so later we'll be able to  */}

            {/*<RenderGrocery items={getFullGrocery(name)} />*/}
            <TileLayout items={getFullGrocery(name)} />



          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>


          <Row gutter={16}>
            <Col className="gutter-row" span={6}>

                {/* Should we really pass the name? or this is just because we don't have a propper ids here?
                If yes, then we should make it clear, so later we'll be able to
                @TODO bad layout here - we need to overmake it as possible - right now it's just working*/}

                <GeneratePDFButton name={name} />

            </Col>
            <Col className="gutter-row" span={6}>
                {/* our second button can be here */}
                <GeneratePDFButton2 name={name} />
            </Col>
            <Col className="gutter-row" span={6}>
                {/* our third button can be here */}
                <GeneratePDFButton3 name={name} />
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
      </Layout>
    )
  }

}


export default InsideLayout;
