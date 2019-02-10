import React from 'react';
import { Row, Col } from 'antd';

import { IngredientList } from '@groceristar/grocery-component';
import Directions  from '../Recipe/DirectionsList';


const rowStyle = { marginBottom: '20px' };

const RecipeLayoutMain = ({ id, recipe }) => (
  <div>
  <Row style={rowStyle}>
    <Col>
    {id}
    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>
      {recipe.title}
    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>


    <Directions items={recipe.directions} />
    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>
    {/*recipe.ingredients*/}
    <IngredientList items={recipe.ingredients} />

    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>
    {recipe.prep_time}
    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>
    {recipe.total_time}
    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>
    {recipe.recipe_yield}
    </Col>
  </Row>
  <Row style={rowStyle}>
    <Col>
    {recipe.url}
    </Col>
  </Row>
  </div>
);

export default RecipeLayoutMain;
