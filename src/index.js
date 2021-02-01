import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Clients/sass/style.scss'
import Clients from './components/Clients'

const App = () => (
  <Clients/>
);

ReactDOM.render(<App />, document.getElementById('root'));
