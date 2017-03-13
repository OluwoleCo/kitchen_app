import React, { Component } from 'react';
import TuesdayDinnerMeal1 from './TuesdayDinnerMeal1';
import TuesdayDinnerMeal2 from './TuesdayDinnerMeal2';
class TuesdayDinner extends Component {
  render() {
    var header = {
      textAlign: 'center'
    }

    var styles = {
      alignment: {
        marginTop: 100,
        marginLeft: 200
      },
      cardContainer: {
        width: 800,
        height:350
      }
    }

    return (
      <div style={styles.alignment}className="col-lg-12">
        <div className="row">
          <div style={styles.cardContainer}>
        <h3 style={header}>Tuesday - Dinner</h3>
        <TuesdayDinnerMeal1 />
        <TuesdayDinnerMeal2 />
      </div>
    </div>
  </div>
    )
  }
}


export default TuesdayDinner;
