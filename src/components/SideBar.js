import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SideBar extends Component {
  render() {

    var sideBarStyle = {
      backgroundColor: 'blue',
      height: '100%'
    }

    var listStyle = {
      listStyle: 'none',
      marginLeft: -40,
      fontSize: 15,
      marginTop: 10
    }
    return (
      <div style={sideBarStyle} className="col-md-2 col-lg-2">
          <img src="../../public/images/mestlogo.png" role="presentation" />
          <ul style={listStyle}>
            <li>
              <FontAwesome
                className='super-crazy-colors'
                name='suitcase'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 15 }}
              />
              Dashboard</li>
            <li>
              <FontAwesome
                className='super-crazy-colors'
                name='cutlery'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 18, marginTop: 20 }}
              />
              Meals</li>
          </ul>
        </div>
    )
  }
}

export default SideBar;
