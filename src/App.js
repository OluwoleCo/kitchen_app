import React, { Component } from 'react';
import './App.css';
// import MealCard from './components/MealCard';
// import SideBar from './components/SideBar';
// import SignUp from './components/SignUp';
// import MealsCard from './components/MealsCard';
import DailyMeals from './components/DailyMeals';
// import MealList from './components/MealList';


class App extends Component {
  render() {
    // var screenHeight = window.screen.height - 200;

    // var dashBoardStyle = {
    //   height: screenHeight
    // }
    return (
      <div className="row">
        {/* <SignUp /> */}
        {/* <MealsCard /> */}
        <DailyMeals />
        {/* <MealList /> */}
      </div>
    );
  }
}

export default App;
