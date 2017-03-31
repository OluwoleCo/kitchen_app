import React from 'react';
import App from './App'
import SignUp from './components/SignUp';
import MondayLunch from './components/MondayLunch';
import MondayDinner from './components/MondayDinner';
import TuesdayLunch from './components/TuesdayLunch';
import TuesdayDinner from './components/TuesdayDinner';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';
import DailyMeals from './components/DailyMeals';
import { Router, Route, hashHistory } from 'react-router';

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/signin' component={SignUp} />
      <Route path='/mondaylunch' component={MondayLunch} />
      <Route path='/mondaydinner' component={MondayDinner} />
      <Route path='/tuesdaylunch' component={TuesdayLunch} />
      <Route path='/tuesdaydinner' component={TuesdayDinner} />
      <Route path='/meals' component={DailyMeals} />
      <Route path='/dashboard' component={DashBoard} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

// class Routes extends React.Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={App}>
//           <Route path='/signin' component={SignUp} />
//           <Route path='/mondaylunch' component={MondayLunch} />
//           <Route path='/mondaydinner' component={MondayDinner} />
//           <Route path='/tuesdaylunch' component={TuesdayLunch} />
//           <Route path='/tuesdaydinner' component={TuesdayDinner} />
//           <Route path='/meals' component={DailyMeals} />
//           <Route path='/dashboard' component={DashBoard} />
//           <Route path='*' component={NotFound} />
//         </Route>
//       </Router>
//     )
//   }
// }
export default Routes;
