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

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
