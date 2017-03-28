import React, { Component } from 'react';
import SideBar from './SideBar';
import RightBar from './RightBar';

class DashBoard extends Component {


  render() {
    var screenHeight = window.screen.height - 200;

    var dashBoardStyle = {
      height: screenHeight
    }
    return (
      <div style={dashBoardStyle}>
          <SideBar />
          <RightBar />
      </div>
    )
  }
}

export default DashBoard
