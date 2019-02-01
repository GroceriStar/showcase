import React from 'react';

// Exported from redux-devtools
// import { createDevTools } from 'redux-devtools';

import { JSONTree } from 'redux-devtools';

// import JSONTree from 'react-json-tree'

// If you're using Immutable.js: `npm i --save immutable`
// import { Map } from 'immutable'

// Inside a React component:
const json = {
  array: [1, 2, 3],
  bool: true,
  object: {
    foo: 'bar'
  },
  // immutable: Map({ key: 'value' })
}

<JSONTree data={json} />
