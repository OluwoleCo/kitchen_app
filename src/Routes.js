import React from 'react';
import { Router, Route } from 'react-router';
import SignUp from './components/SignUp';
import SelectMeals from './components/SelectMeals';

var Routes = (
  <Router>
    <Route path="/signup" component={SignUp} />
    <Route path="/selectmeal" component={SelectMeals} />
  </Router>
);

export default Routes;
