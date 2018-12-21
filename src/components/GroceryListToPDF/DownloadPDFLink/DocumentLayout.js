import React from 'react';
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

// import styles from './styles'

import RenderLists from '../RenderLists/RenderLists';

// const DocumentLayout = ( styles, name ) => (

  const DocumentLayout = ( styles, name ) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {name}
        </Text>
        <RenderLists groceryName2={name}/>
      </View>
    </Page>
  </Document>
);

export default DocumentLayout;
