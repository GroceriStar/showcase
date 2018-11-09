import React from 'react';
// Create styles

import DownloadLink from '../DownloadLink/DownloadLink';
import './GeneratePDF.css';

class GeneratePDF extends React.Component {
  
  constructor () {
    super()
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
         <button type="button" onClick={this.toggleHidden.bind(this)} >
           Generate PDF file
         </button>
         {!this.state.isHidden && <DownloadLink groceryName1={this.props.groceryName}/>}
       </div>
   );
 }
}

export default GeneratePDF;
