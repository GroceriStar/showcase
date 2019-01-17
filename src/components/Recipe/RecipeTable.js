import React, { Component, Fragment } from 'react'


import { Table } from 'antd';


//
// {recipe.id}
// <br />
// {recipe.title}
// <br />
// {recipe.directions}
//
// <br />
//
// {recipe.ingredients}
// <IngredientList items={recipe.ingredients} />
//
// <br />
// {recipe.prep_time}
// <br />
// {recipe.total_time}
// <br />
// {recipe.recipe_yield}
// <br />
// {recipe.url}



const columns = [
  // {
  // title: 'ID',
  // dataIndex: 'id',
  // },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Directions',
    dataIndex: 'directions',
  },
  {
    title: 'Ingredients',
    dataIndex: 'ingredients',
  },
  {
    title: 'Prep Time',
    dataIndex: 'prep_time',
  },
  {
    title: 'Total Time',
    dataIndex: 'total_time',
  },
  {
    title: 'Yield',
    dataIndex: 'recipe_yield',
  },
  {
    title: 'URL',
    dataIndex: 'url',
  },

];

//
// const data = [{
//   key: '1',
//   name: 'John Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
// }, {
//   key: '3',
//   name: 'Joe Black',
//   age: 32,
//   address: 'Sidney No. 1 Lake Park',
// }];


//@TODO maybe later we should use {...data} for settings like size, etc
const RecipeTable = ({ data }) => (

  <Table
    columns={columns}
    dataSource={data}
    size="small" />

)

export default RecipeTable
