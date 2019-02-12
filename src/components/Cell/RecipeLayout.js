import React, {
  Component
} from 'react'
import uuidv1 from 'uuid/v1';



import { Link } from 'react-router-dom';

import { Button, Icon, Layout, Row, Col, Table } from 'antd'

import TileLayout from '../TileLayout/TileLayout'


// import { GeneratePDFButton } from '../GroceryListToPDF'
import { GeneratePDFButton } from '@groceristar/pdf-export';



import Details       from './../Recipe/Details'
import Directions    from './../Recipe/DirectionsList'
import FullDetails   from './../Recipe/FullDetails'
import MiddleDetails from './../Recipe/MiddleDetails'
import ShortDetails  from './../Recipe/ShortDetails'





import { getFullGrocery } from '../../selectors/selector';

import { IngredientList, DefaultList } from '@groceristar/grocery-component';

import { getRecipeLink, getLink } from '../../Router';

import RecipeHeader from './RecipeHeader';


import RecipeTable      from './../Recipe/RecipeTable'
import RecipeLayoutMain from './RecipeLayoutMain';


const { Header, Footer, Content } = Layout;



//Styles
const contentStyle = { margin: '24px 16px 0', fontSize: '14px' };
const contentDivStyle1 = { padding: 24, background: '#fff', minHeight: 360 };
const contentDivStyle2 = { color: 'black' };
const footerStyle = { textAlign: 'center' };

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
        <Content style={contentStyle}>


          <div style={contentDivStyle1}>
            <div style={contentDivStyle2}>



              {/* @TODO move away this. incorporate same logic as
                 TileLayout has but with TileLayout/RecipePlain version */}

              <RecipeLayoutMain
                id={id}
                recipe={recipe}
                />
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
        <Footer style={footerStyle}>

          {/* Should we really pass the name? or this is just because we don't have a propper ids here?
          If yes, then we should make it clear, so later we'll be able to
          @TODO bad layout here - we need to overmake it as possible - right now it's just working*/}


          <GeneratePDFButton name={recipe.title} />
          <br />


          <Link to={getLink(id)}>
            <Button type="primary" icon="right" size="large">
              View "{recipe.title}"
            </Button>
          </Link>



        </Footer>
      </Layout>
    )
  }

}


export default RecipeLayout;
