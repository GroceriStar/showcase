Showcase is a project where we trying to incorporate two major tasks:
1. show to a new users a collection of grocery lists - before they sign up - they want to explore the data that we have
2. figure out the way about making GL downloable by generating a simple PDF file


[![Build Status](https://travis-ci.org/GroceriStar/showcase.svg?branch=master)](https://travis-ci.org/GroceriStar/showcase)

While we're coding it - we also extending the code base of GS, by testing fetch plugin, by moving away basic components, like lists, grocerylist component, etc...

Major goals for showcase is -
* realize a better way to connect `fetch` with React projects
* test different plugins that will convert HTML into PDF
* set up first basic routes for previewing data from grocery lists(sometimes you just want to compare raw data, not at fancy way)
* test an assuption - Can we separate some react components and import them as npm package
* show users what data we have - at preview mode

Stretch goals:
- [ ] install and connect Raven at index.js
- [ ] adjust logic of envconfig and try to connect to our local/shared servers
- [ ] make first axios calls and be happy to receive json results
- [ ] connect to our simple [fake-api](https://github.com/GroceriStar/fake-api) that i've created...

---

- [ ] complete grocery list components - with empty/plain version - for just data and verions with antD collapse
- [ ] wait when antd will release a new version of package and apply to work DepartmentListCollapse
- [ ] make header blue or white not black with black text color
- [ ] we can fix tiles too. same background colors and text color is not perfect + shoplist update with a similar logic
- [ ] List -> Departments \ Ingredients -> get data form selects with AntD. Details upon request. After onChange - we have a redirect to Ingredient list, related to that Department
- [ ] advanced search at header, not just by grocery list name, we also can search by "departments" or "ingredients". maybe we can also add "categories", like "healthy", "cheap", "weight-loss", etc.
- [ ] Grocery list printed version in flexboxes and borders
- [ ] recipe to gl convertion
- [ ] GetData / Flow, from Meal Calendar to Showcase
- [ ] Add to GL flow of forms we can create

https://codesandbox.io/s/n1p6k7n440

Showcase have search by Title
Modals with layouts
Connection to fetch
Can be quickly replaced with "fake api"
1) create a separated view for Grid
2) separated layout for modal render
3) we can make our component this way, so we can update into Material UI
4) Print template of Recipes

- [ ] moving away from this project code, related to pdf export
---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
