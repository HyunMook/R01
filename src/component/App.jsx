import React from 'react';
/*
import { printLog } from 'src/modules/mTest'; // Can jump to the file, but why it doesn't have pre-root(/) or alias @?
If I apply this auto-generated import statement, the below Error occured.
---
ERROR in ./src/component/App.jsx
Module not found: Error: Can't resolve 'src/modules/mTest' in '/Users/hmroh/Dev/ReactJS/R01/src/component'
 @ ./src/component/App.jsx 11:0-45 16:2-10
 @ ./src/index.js
*/
import { printLog } from '../modules/mTest'; // Can jump to the file!
import Sample01 from './SubDirectory/Sample01'; // Cannot jump to the file.

const App = () => {
  printLog('Hey!');
  return (
    <div>
      Hello?
      <Sample01 />
    </div>
  );
};

export default App;
