import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List, { Item } from '../List/List';

import { getFullGrocery } from "../../../selectors/selector";


// import { getFullGrocery } from "../../selectors/selector";

import uuidv1 from 'uuid/v1';
// This component is related to creating PDF document


const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    color:"blue",
  },
  skills: {
    fontSize: 14,
    marginBottom: 10,
  },
});


const Lists = ({ department, ingredients }) => (
  <View>
    <Text style={styles.title}>
      {department}
    </Text>
    <List>
      {ingredients.map((ingredient) => <Item key={uuidv1()}>{ingredient}</Item>)}
    </List>
  </View>
);


const RenderLists = (props) => (
  <View>
    {getFullGrocery(props.groceryName2).map(item => (
      <Lists
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))}
  </View>
);


Lists.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
};

export default RenderLists;
