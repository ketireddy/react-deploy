import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { App } from './App';

import { configureFakeBackend } from './_helpers';
configureFakeBackend();


ReactDOM.render(
    <App />,
  document.getElementById('app')
);

