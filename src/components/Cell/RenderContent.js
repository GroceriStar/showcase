import React, {
  Component, PureComponent
} from 'react';

import { Button, Icon, Layout, Row, Col } from 'antd';

import { getFullGrocery } from '../../selectors/selector';
import TileLayout from '../TileLayout/TileLayout';


const { Header, Footer, Content } = Layout;

const ContentStyle = { margin: '24px 16px 0', fontSize: '14px' };

const divStyle = { padding: 24, background: '#fff', minHeight: 360 };

//@TODO after updates, i don't see a reason why we should keep this component. we can move all of this stuff into tile i assume...

class RenderContent extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  // if (this.props.name !== nextProps.name) {
  //   console.log("Name RenderContent **********************");
  //       return true;
  //     }
  //     console.log("False RenderContent****************************");
  //     return false;
  //   }

  render(){



    return (
      <Content style={ContentStyle}>


        <div style={divStyle}>

          {/* @TODO the problem here - we need to connect selectors and pass `name` variable here. it's not cool and not- reusable */}

          {/* old version: /* Should we really pass the name? or this is just because we don't have a propper ids here?
          If yes, then we should make it clear, so later we'll be able to  */}

          <TileLayout items={getFullGrocery(this.props.name)} />



        </div>

      </Content>
    )
  }
}
export default RenderContent;
