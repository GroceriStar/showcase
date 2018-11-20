import React from 'react';
// Create styles

import DownloadLink from '../DownloadLink/DownloadLink';
import { Button } from 'antd';

// import './GeneratePDF.css';

class GeneratePDF extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    return (
      <div>
         <Button type="primary" icon="file-pdf" size="large"
            onClick={this.toggleHidden.bind(this)}>
            Generate PDF file
        </Button>

         {!this.state.isHidden &&
            <DownloadLink groceryName1={this.props.groceryName}/>
         }
       </div>
   );
 }
}

export default GeneratePDF;
