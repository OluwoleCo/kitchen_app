import React, { Component } from 'react';
import image from '../../public/images/jollof.jpg';
import MealsCard from './MealsCard';


class SelectMeals extends Component {

  render() {
    var mealsInfo = [
    {
      image: image,
      heading:'Chicken wings',
      text:'Chicken Wings are made from chicken wings'
    },
    {
      image: image,
      heading:'Chicken wings',
      text:'Chicken Wings are made from chicken wings'
    }

  ]

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
            <MealsCard mealsInfo={mealsInfo} />
          </div>
        </div>
      </div>
    )
  }
}

export default SelectMeals;
