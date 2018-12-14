import React from 'react';
// Create styles

import DownloadPDFLink from '../DownloadPDFLink/DownloadPDFLink';
import { Button } from 'antd';

class GeneratePDFButton extends React.Component {

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
        {this.state.isHidden &&
           <Button type="primary" icon="file-pdf" size="large"
              onClick={this.toggleHidden.bind(this)}>
              Generate PDF file
          </Button>
        }

         {!this.state.isHidden &&
            <DownloadPDFLink name={this.props.name}/>
         }
       </div>
   );
 }
}

export default GeneratePDFButton;
