import React, { Component, Fragment } from 'react';
import { Text,
   Page,
   View,
   Document,
   StyleSheet,
   PDFDownloadLink
} from '@react-pdf/renderer';

import RenderLists from '../RenderLists/RenderLists';

// @TODO rename this component name.
// because it's quite similar to component from @react-pdf - see above


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    "font-size": "18px"
  }

});

const DocumentLayout = ( styles, name ) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {/*this.props.groceryName1*/}
          {name}
        </Text>
        <RenderLists groceryName2={name}/>
      </View>
    </Page>
  </Document>
);

class DownloadPDFLink extends Component {

 // MyDoc = (
 //
 //  );

  render(){
    return(
      {/*<Fragment>*/}
        <Button type="primary" icon="download"
          size="large">
           <PDFDownloadLink
             document={DocumentLayout(styles, this.props.groceryName1)}
             fileName={this.props.groceryName1 + ".pdf"}>
               {({ blob, url, loading, error }) => (
                 loading ? 'Loading document...' : 'Download now!'
               )}
           </PDFDownloadLink>
       </Button>

    {/*</Fragment>*/}
    );
  }
}

export default DownloadPDFLink;
