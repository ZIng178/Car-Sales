import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
// import {}

import 'bulma/css/bulma.css';
import './styles.scss';

const store=creatStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
