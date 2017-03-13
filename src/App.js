import React, { Component } from 'react';
import './App.css';
// import MealCard from './components/MealCard';
// import SideBar from './components/SideBar';
import SignUp from './components/SignUp';
// import MealsCard from './components/MealsCard';
// import DailyMeals from './components/DailyMeals';
// import MealList from './components/MealList';
import SelectMeals from './components/SelectMeals';
import NotFound from './components/NotFound';
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
          <Route path='/' component={SignUp} />
          <Route path='selectmeals' component={SelectMeals} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>
    );
  }
}

export default App;
