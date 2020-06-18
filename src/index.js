import ReactDOM from 'react-dom';
import React from 'react';
import App from './component/App'; // `Jump to` is not working.

/*
import '@assets/styles.css'; // `Auto-complete` is not working for css file name with alias path.
---
ERROR in ./src/index.js
Module not found: Error: Can't resolve '@assets/styles.css' in '/Users/hmroh/Dev/ReactJS/R01/src'
 @ ./src/index.js 13:0-28
*/

import '../assets/styles.css'; // `Auto-complete` is working, `Jump to` is not working.

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
