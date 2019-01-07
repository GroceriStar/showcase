import React, {
  Component
} from 'react'


import TileLayout from '../TileLayout/TileLayout'

import { GeneratePDFButton } from '../GroceryListToPDF'








import { getFullGrocery } from '../../selectors/selector';
import uuidv1 from 'uuid/v1';
import { IngredientList, DefaultList } from '@groceristar/grocery-component';

import { getRecipeLink } from '../../Router';
import RecipeHeader from './RecipeHeader';
import { Button, Icon, Layout, Row, Col, Table } from 'antd'

import RecipeTable from './../Recipe/RecipeTable'

const { Header, Footer, Content } = Layout;

// @TODO replace this with a links, related to react-router
// @TODO good example how for second case this link is not working well.
function getLink( id ){
  return '/grocery/'+ id;
}


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

class RecipeLayout extends Component {


  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.toggle !== nextState.toggle) {
      console.log("Toggle RecipedeLayout **********************");
          return true;
    }
    console.log("False RecipeLayout****************************");
    return false;
  }
  // constructor(props) {
  //   super(props);
  //   // maybe we should add to state some default stuff and then check on mount if data,
  //   // that we used was passed into this component
  //   // this.state = {
  //   //   counter
  //   // }
  //
  // }

  render() {

    const { toggle, id, recipe} = this.props;

    console.log(recipe);

    // console.log(this.props.data)

    return (
      <Layout>
        <RecipeHeader title={recipe.title} toggle={toggle} />
        <Content style={{ margin: '24px 16px 0', fontSize: '14px' }}>


          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div style={{ color: 'black' }}>

              {/*<TileLayout  items={getFullGrocery(name)} />*/}

              {/* @TODO move away this. incorporate same logic as
                 TileLayout has but with TileLayout/RecipePlain version */}

              <Row>
              <Col>
              {recipe.id}
              </Col>
              <Col>
                {recipe.title}
              </Col>
              <Col>
              {recipe.directions}
              </Col>
              <Col>
              {/*recipe.ingredients*/}
              <IngredientList items={recipe.ingredients} />

              </Col>
              <Col>
              {recipe.prep_time}
              </Col>
              <Col>
              {recipe.total_time}
              </Col>
              <Col>
              {recipe.recipe_yield}
              </Col>
              <Col>
              {recipe.url}
              </Col>
              </Row>




              <Table columns={columns} dataSource={[recipe]} size="small" />

              <RecipeTable data={[recipe]} />

            </div>
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>








          {/* Should we really pass the name? or this is just because we don't have a propper ids here?
          If yes, then we should make it clear, so later we'll be able to
          @TODO bad layout here - we need to overmake it as possible - right now it's just working*/}



          <GeneratePDFButton name={recipe.title} />
          <br />

          <Button type="primary" icon="right" size="large"
            href={getLink(id)}>
            View "{recipe.title}"
          </Button>












        </Footer>
      </Layout>
    )
  }

}


export default RecipeLayout;
