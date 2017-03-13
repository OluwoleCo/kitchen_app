import React, { Component } from 'react';
import TuesdayLunchMeal1 from './TuesdayLunchMeal1';
import TuesdayLunchMeal2 from './TuesdayLunchMeal2';

class TuesdayLunch extends Component {
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
            <h3 style={header}>Tuesday - Lunch</h3>
            <TuesdayLunchMeal1 />
            <TuesdayLunchMeal2 />
          </div>
        </div>
      </div>
    )
  }
}


export default TuesdayLunch;
