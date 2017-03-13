import React, { Component } from 'react';
import MondayLunchMeal1 from './MondayLunchMeal1';
import MondayLunchMeal2 from './MondayLunchMeal2';

class MondayLunch extends Component {
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
            <h3 style={header}>Monday - Lunch</h3>
            <MondayLunchMeal1 />
            <MondayLunchMeal2 />
          </div>
        </div>
      </div>
    )
  }
}


export default MondayLunch;
