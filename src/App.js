import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
        <button className="btn btn-primary">Next Meal</button>
      </div>
    );
  }
}

export default App;
