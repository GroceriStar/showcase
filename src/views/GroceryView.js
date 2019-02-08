import React, { Component, Fragment } from 'react';



import { Layout } from 'antd';
import { Collapse } from 'antd';

import DepartmentListCollapse from '../components/DepartmentList/DepartmentListCollapse'

import {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId
} from "./../selectors/selector";


import { List, IngredientList } from '@groceristar/grocery-component';
import uuidv1 from 'uuid/v1';

// import { DepartmentList } from '@groceristar/grocery-component'






import "antd/dist/antd.css";



// @TODO GroceryView later became a page with clean display of grocery information.
const {
  Header, Footer, Content,
} = Layout;

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class GroceryView extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: []
    }
  }

  async componentDidMount(){
    // let grocery = getGroceryById(this.state.id)[0];
    // let groceryName = grocery.name;
    try{
      let response = await getGroceryDataFromId(this.state.id);
        this.setState({
              data: response.data
            })
        } catch (e) {
            console.error("Can't connect to Database");
    }

  }
  render() {

    // const { id } = this.props.match.params;

    // 1. console.log( getGroceryCollection() );




    // @TODO maybe we can move this things into selectors?
    // lately we wouldn't need to convert id to number
    // let grocery = getGroceryById(parseInt(id, 10))[0];
    // // console.log(grocery)
    //
    // let groceryName = grocery.name;
    // let groceryWithDepAndIng = getFullGrocery(groceryName);

    // console.log(groceryWithDepAndIng)

    // 2. let data = getGroceryDataFromId(this.state.id);


  // 3. console.log( getGroceryById(id) );


    return (
      <Fragment>
        {/*<DepartmentList items={groceryWithDepAndIng} />*/ }



        {/*<DepartmentListCollapse items={groceryWithDepAndIng} /> */}

        <Layout>
          <Header>
            Header - {this.state.data.name}
          </Header>
          <Content>


            {/*
            <Collapse accordion>
             <Panel header="This is panel header 1" key="1">
               <p>{text}</p>
             </Panel>
             <Panel header="This is panel header 2" key="2">
               <p>{text}</p>
             </Panel>
             <Panel header="This is panel header 3" key="3" >
               <p>{text}</p>
             </Panel>
            </Collapse>
            */}





            <Collapse accordion>

              {this.state.data && this.state.data.map( (value) =>
                 // console.log(value)
                 (<Panel header={value.department} key={uuidv1()} >

                   <IngredientList items={value.ingredients} />
                 </Panel>)
               )}






            </Collapse>

          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </Fragment>
    );
  }
}

export default GroceryView;
