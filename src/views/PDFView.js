import React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import RenderLists3 from '../components/GroceryListToPDF/RenderLists3/RenderLists3'
// Create styles
import styles from './styles'

import { getFullGrocery } from "../selectors/selector";

// console.log(styles)
const data = getFullGrocery("19 Gluten-Free Foods Shopping List");
console.log(data);
// Create Document Component


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
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          19 Gluten-Free Foods Shopping List
        </Text>
      </View>
    <RenderLists3 data={data} />

    </Page>
  </Document>
);


export default MyDocument
// ReactDOM.render(<MyDocument />, document.getElementById('root'));
