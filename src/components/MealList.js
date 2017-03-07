import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MealList extends Component {
  render() {

    var ListStyle = {
      borderBottom: '1px solid #7f8c8d'
    }
    return(
      // <div className="col-lg-12">
      //   <div style={ListStyle} className="row">
      //     <div>
      //       <div className="col-lg-2">
      //         <FontAwesome
      //           className='super-crazy-colors'
      //           name='suitcase'
      //           style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 15 }}
      //         />
      //       </div>
      //       <div className="col-lg-10">
      //         <p>Oats</p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        <div style={ListStyle} className="col-lg-12">
            <p> <FontAwesome
              className='super-crazy-colors'
              name='check-circle'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 15 }}
            />
          Oats</p>
        </div>
        <div style={ListStyle} className="col-lg-12">
            <p> <FontAwesome
              className='super-crazy-colors'
              name='check-circle'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 15 }}
            />
          Rice and Beans </p>
        </div>
        <div style={ListStyle} className="col-lg-12">
            <p> <FontAwesome
              className='super-crazy-colors'
              name='check-circle'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: 15 }}
            />
          Banku and Okro Stew</p>
        </div>
      </div>
    )
  }
}

export default MealList;
