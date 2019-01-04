import React, {
  Component
} from 'react'


import TileLayout from '../TileLayout/TileLayout'

import { GeneratePDFButton } from '../GroceryListToPDF'








import { getFullGrocery } from '../../selectors/selector';
import uuidv1 from 'uuid/v1';
import { IngredientList } from '@groceristar/grocery-component';

import { getRecipeLink } from '../../Router';

import { Button, Icon, Layout, Row, Col } from 'antd'

const { Header, Footer, Content } = Layout;

// @TODO replace this with a links, related to react-router
// @TODO good example how for second case this link is not working well.
function getLink( id ){
  return '/grocery/'+ id;
}

class RecipeLayout extends Component {

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

    const { id, recipe, toggle } = this.props;

    console.log(recipe);

    // console.log(this.props.data)

    return (
      <Layout>
        <Header style={{
          // background: '#fff',
          // color:'red',
          //padding: 0
          fontSize: '20px'
      }}>


          <Row>
            <Col span={20}>

                      "{recipe.title}" Template
            </Col>
            <Col span={4}>

              <Icon
                className="tile-close"
                type="close"
                style={{ cursor: "pointer", transition: "color .3s" }}
                onClick={toggle}
              />

            </Col>
          </Row>

        </Header>
        <Content style={{ margin: '24px 16px 0', fontSize: '14px' }}>


          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div style={{ color: 'black' }}>

              {/*<TileLayout  items={getFullGrocery(name)} />*/}

              {/* @TODO move away this. incorporate same logic as
                 TileLayout has but with TileLayout/RecipePlain version */}
              {recipe.id}
              <br />
              {recipe.title}
              <br />
              {recipe.directions}

              <br />

              {recipe.ingredients}
              <IngredientList items={recipe.ingredients} />

              <br />
              {recipe.prep_time}
              <br />
              {recipe.total_time}
              <br />
              {recipe.recipe_yield}
              <br />
              {recipe.url}

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
