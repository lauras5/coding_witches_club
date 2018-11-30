import React, { Component, Fragment } from 'react';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div id='home-img'></div>
        <div id='text'>
          <div id='left-text'>
            <p>CODING</p>
            <p>CL</p>
          </div>
          <div id='right-text'>
            <div id='color-block'></div>
            <p>WITCHES</p>
            <p>UB</p>
          </div>
        </div>
        {/* <img id='home-img' src='https://images.pexels.com/photos/1427513/pexels-photo-1427513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/> */}
      </Fragment>
    )
  }
}

export default HomePage;
