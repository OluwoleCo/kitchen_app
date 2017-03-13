import React, { Component } from 'react';
import MondayDinnerMeal1 from './MondayDinnerMeal1';
import MondayDinnerMeal2 from './MondayDinnerMeal2';
class MondayDinner extends Component {
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
        <h3 style={header}>Monday - Dinner</h3>
        <MondayDinnerMeal1 />
        <MondayDinnerMeal2 />
      </div>
    </div>
  </div>
    )
  }
}


export default MondayDinner;
