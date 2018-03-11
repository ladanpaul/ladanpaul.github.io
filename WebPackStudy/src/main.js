import ReactDOM from 'react-dom';
import React from 'react';

import NotesApp from './components/NotesApp.jsx';
console.log(process.env.NODE_ENV);

ReactDOM.render(
  <NotesApp />,
  document.getElementById('root')
);