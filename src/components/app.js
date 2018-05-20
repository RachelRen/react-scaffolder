import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Home from '../page/home/index'
import Center from '../page/center/index'

import Counter from './counter'

const App = props => {
  const { history } = props;

  return (
    <div>
    		<Route exact path="/" component={Home}/>
    	</div>
  );
};

export default App;