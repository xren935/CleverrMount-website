import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Popup from './components/popup';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Popup />
    <Header />
    <About />
    <Products />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
