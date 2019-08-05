import React from 'react';
import './css/app.css';
import './css/animate.min.css';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

const App = () => (
  <div className="App">
  	<Header />
  	<Menu />
    <Main />
  </div>
)

export default App;