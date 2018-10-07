import React from 'react';
import {Text, Page, View, Document, StyleSheet, PDFDownloadLink  } from '@react-pdf/renderer';
import RenderLists from '../RenderLists/RenderLists';

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


class DownloadLink extends React.Component{

 MyDoc = (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>{this.props.groceryName1}</Text>
          <RenderLists groceryName2={this.props.groceryName1}/>
        </View>
      </Page>
    </Document>
  );

  render(){
    return(
      <div>
      <PDFDownloadLink document={this.MyDoc} fileName={this.props.groceryName1 + ".pdf"}>
          {({ blob, url, loading, error }) => (
            loading ? 'Loading document...' : 'Download now!'
          )}
        </PDFDownloadLink>
      </div>
    );
  }
}

export default DownloadLink;
