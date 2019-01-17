import React, {
  Component
} from 'react'


import TileLayout from '../TileLayout/TileLayout'

// import { GeneratePDFButton } from '../GroceryListToPDF'
import { GeneratePDFButton } from '@groceristar/pdf-export';




import Details       from './../Recipe/Details'
import Directions    from './../Recipe/DirectionsList'
import FullDetails   from './../Recipe/FullDetails'
import MiddleDetails from './../Recipe/MiddleDetails'
import ShortDetails  from './../Recipe/ShortDetails'







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

// <FullDetails   data={recipe} />
// <MiddleDetails data={recipe} />
// <ShortDetails  data={recipe} />
//
// /* or full, middle, small */
// <Details data={recipe} type={'full'} />

//----------------------------------------
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

  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.toggle !== nextState.toggle) {
  //     console.log("Toggle RecipedeLayout **********************");
  //         return true;
  //   }
  //   console.log("False RecipeLayout****************************");
  //   return false;
  // }
  //
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

    const { toggle, id, recipe } = this.props;

    // console.log(recipe.ingredients);
    // console.log(id);

    // console.log(this.props.data)

    return (
      <Layout>
        <RecipeHeader title={recipe.title} toggle={toggle} />
        <Content style={{ margin: '24px 16px 0', fontSize: '14px' }}>


          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div style={{ color: 'black' }}>



              {/* @TODO move away this. incorporate same logic as
                 TileLayout has but with TileLayout/RecipePlain version */}

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
            {/* then end */}



              <hr />

              <RecipeTable data={[recipe]} />

              <hr />

              {/* this is not working */}
              <FullDetails   data={recipe} />
              <MiddleDetails data={recipe} />
              <ShortDetails  data={recipe} />


              {/* or full, middle, small */}
              <Details data={recipe} type={'full'} />

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
