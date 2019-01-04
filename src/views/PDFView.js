import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import RenderLists3 from '../components/GroceryListToPDF/RenderLists3/RenderLists3'
// Create styles
// import styles from './styles'

import { getFullGrocery } from "../selectors/selector";

// console.log(styles)
// const data = getFullGrocery("19 Gluten-Free Foods Shopping List");
// console.log(data);
// Create Document Component

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

{/* <View style={styles.block}>
  <View>
    <Text>one</Text>
  </View>
  <View style={styles.block1}>
    <Text>one2</Text>
  </View>
  <View style={styles.block1}>
    <Text>one3</Text>
  </View>
  <View style={styles.block1}>
      <Text>on4</Text>
  </View>
  <View style={styles.block1}>
      <Text>on5</Text>
  </View>
  <View style={styles.block1}>
    <Text>one6</Text>
  </View>
</View> */}

const MyDocument = () => (
  <PDFViewer width={1200} height={1000}>
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View>
        <Text>
          19 Gluten-Free Foods Shopping List
        </Text>
      </View>
    {/* <RenderLists3 data={data} /> */}

    </Page>
  </Document>
</PDFViewer>
);


export default MyDocument
// ReactDOM.render(<MyDocument />, document.getElementById('root'));
