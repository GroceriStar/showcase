import React from 'react';
import { Row, Col } from 'antd';
import { IngredientList } from '@groceristar/grocery-component';
import Directions  from '../Recipe/DirectionsList';

const RecipeLayoutMain = ({id, recipe}) => (
  <div>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
    {id}
    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
      {recipe.title}
    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>


    <Directions items={recipe.directions} />
    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
    {/*recipe.ingredients*/}
    <IngredientList items={recipe.ingredients} />

    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
    {recipe.prep_time}
    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
    {recipe.total_time}
    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
    {recipe.recipe_yield}
    </Col>
  </Row>
  <Row style={{ marginBottom: '20px' }}>
    <Col>
    {recipe.url}
    </Col>
  </Row>
  </div>
);

export default RecipeLayoutMain;
