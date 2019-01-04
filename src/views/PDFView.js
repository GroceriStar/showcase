import React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: '3px solid black'
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1 header</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2 header</Text>
      </View>
    </Page>
  </Document>
);


export default MyDocument
// ReactDOM.render(<MyDocument />, document.getElementById('root'));
