import React, {
  Component
} from 'react'
// import { Link } from 'react-router-dom'
//

import {
  // Button, Icon,
   Layout,
    // Row, Col
  } from 'antd'

import RenderHeader  from './RenderHeader';
import RenderContent from './RenderContent';
import RenderFooter  from './RenderFooter'

const { Header, Footer, Content } = Layout;


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
        <RenderHeader toggle={toggle} name={name} />
        <RenderContent name={name} />
        <RenderFooter id={id} name={name} />
      </Layout>
    )
  }

}


export default InsideLayout;
