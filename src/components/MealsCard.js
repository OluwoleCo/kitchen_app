import React, { Component } from 'react';
import image from '../../public/images/jollof.jpg';

class MealsCard extends Component {
  render() {

    var imageStyle = {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    }

    var horizontalStyle = {
      width: 50,
      border: "1 solid blue",
      borderColor: 'black'
    }

    // var imageDiv = {
    //   backgroundColor: 'red',
    //   height: '50%',
    //   backgroundImage: 'url(' + image + ')'
    // }

    var mainCard = {
      width: 270,
      textAlign: 'center',
      backgroundColor: '#fff',
      paddingBottom: 10
    }


    return (
      <div className="col-lg-12">
        <div style={mainCard}>
          <div>
            <img style={imageStyle} src={image} alt="profile" />
          </div>
          <h4>Chicken wings</h4>
          <hr style={horizontalStyle}></hr>
          <p>Chicken Wings are made from chicken wings</p>
        </div>
      </div>
    )
  }
}


export default MealsCard;
