import React, { Component } from 'react';
import './App.css';

import SignUp from './components/SignUp';
import MondayLunch from './components/MondayLunch';
import MondayDinner from './components/MondayDinner';
import TuesdayLunch from './components/TuesdayLunch';
import TuesdayDinner from './components/TuesdayDinner';
// import SelectMeals from './components/SelectMeals';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';
import DailyMeals from './components/DailyMeals';
import { Router, Route, hashHistory } from 'react-router';

class App extends Component {
  render() {
    // var screenHeight = window.screen.height - 200;

    // var dashBoardStyle = {
    //   height: screenHeight
    // }
    return (
      <div className="row">
        <Router history={hashHistory}>
          <Route path='/signin' component={SignUp} />
          <Route path='/mondaylunch' component={MondayLunch} />
          <Route path='/mondaydinner' component={MondayDinner} />
          <Route path='/tuesdaylunch' component={TuesdayLunch} />
          <Route path='/tuesdaydinner' component={TuesdayDinner} />
          <Route path='/meals' component={DailyMeals} />
          <Route path='/dashboard' component={DashBoard} />

          <Route path='*' component={NotFound} />
        </Router>

      </div>
    );
  }
}

export default App;
