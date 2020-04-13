import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ButtonSuccess from './components/ButtonSuccess';
import Inventory from './components/inventory';
import Label from './components/Label';
import Timer from './components/Timer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <ButtonSuccess/>
      <Timer/>
        <ol>
          <li>beli buku</li>
          <li>belajar reactjs</li>
        </ol>
        <Label isi="ini adalah isi"/>
        <Label isi="contoh mengirimkan props ke children"/>
        <Inventory/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
