import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
import MealList from './MealList';



class DailyMeals extends Component {
  constructor(props) {
    super(props)
      this.state = {
        visible: false
      }
}

onButtonClick() {
  this.setState({
      visible: !this.state.visible
    })
}
  render() {

    var blockStyle = {
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 3,
      heading: {
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: 'blue',
        marginLeft: 30,
        marginRight: 30,
        color: '#fff',
        borderRadius: 3
      },
      pStyle: {
        marginTop: 17
      },

    }

    return (
      <div className="col-lg-12">
        <div className="row">
          <div style={blockStyle}>
            <div className="col-lg-2">
              <p style={blockStyle.heading}>M</p>
            </div>
            <div className="col-lg-10">
              <p style={blockStyle.pStyle}>Monday</p>
              {/* <a href="#">
                <FontAwesome
                  className='super-crazy-colors'
                  name='arrow-right'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 15 }}
                />
              </a> */}
              <button style={{float: 'right', marginTop: '-30'}}onClick={this.onButtonClick.bind(this)}>Click Me</button>
            </div>
          </div>
        </div>
        { this.state.visible ? <MealList /> : null }
      </div>

    )
  }
}

export default DailyMeals;
