import React, { Component } from 'react';

class MealCard extends Component {
  render() {
    var mealCardStyle = {
      width: 300,
      height: 300,
      borderRadius: 10,
      backgroundColor: '#fff'
    }

    var heading = {
      textAlign: 'center',
      color: 'black',
      paddingTop: 10
    }

    var bigNumber = {
      fontSize: 90,
      textAlign: 'center'
    }

    var horizontalStyle = {
      width: 50,
      border: "1 solid black",
      marginTop: -30
    }

    // var miniDiv = {
    //   backgroundColor: '#9b59b6',
    //   textAlign: 'center',
    //   marginTop: 2,
    // }
    var miniDivRight = {
      backgroundColor: '#9b59b6',
      textAlign: 'center',
      marginTop: 2,
      borderLeftColor: '#fff',
      borderLeftWidth: 1,
      borderLeftStyle: 'solid'

    }

    var miniDivLeft = {
      backgroundColor: '#9b59b6',
      textAlign: 'center',
      marginTop: 2,
      borderRightColor: '#fff',
      borderRightWidth: 1,
      borderRightStyle: 'solid',
      width: '50%',
      height: 123
    }

    var miniHeading = {
      color: 'yellow',
    }

    var miniNum = {
      fontSize: 40,
      color: 'white'
    }


    return (
      <div style={mealCardStyle}>
        <div className="col-lg-4">
          <h3 style={heading}>Breakfast</h3>
          <p style={bigNumber}>40</p>
        <hr style={horizontalStyle}></hr>
          <div className="row">
            <div style={miniDivLeft} className=" col-sm-12 col-md-6">
              <h3 style={miniHeading}>Oats</h3>
              <p style={miniNum}>15</p>
            </div>
            <div style={miniDivRight} className="col-sm-12 col-md-6">
              <h3 style={miniHeading}>Milo Drink</h3>
              <p style={miniNum}>25</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MealCard;
