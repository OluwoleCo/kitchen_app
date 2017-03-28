import React, { Component } from 'react';
import logo from './mestlogo.png';
// import SelectMeals from './SelectMeals';

class SignUp extends Component {
  render() {

    var signInStyle = {
      width: '25%',
      margin: 'auto',
      textAlign: 'center',
      height: 400,
      backgroundColor: 'white'
    }

    var imageStyle ={
      marginTop: 30
    }

    var emailStyle = {
      marginTop: 30,
    }

    var buttonStyle = {
      marginTop: 50,
      width: '50%'
    }

    var inputStyle = {
      padding: 9,
    marginTop: 50
    }

    return(
      <div style={signInStyle}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <h3>Sign In</h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <img style={imageStyle} src={logo} alt="profile" />
              </div>
            </div>
      </div>

          <div className="row">
            <div className="col-lg-12">
              <div style={emailStyle}>
                <input style={inputStyle} type="text" placeholder="E-mail"/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
                {/* <Link to='/selectmeals'> */}
                  <button style={buttonStyle} className="btn btn-primary">Sign In</button>
                {/* SelectMeals */}
                {/* </Link> */}

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default SignUp;
