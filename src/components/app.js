import React, { Component } from 'react';
import Cube from './cube/cube';
import SmallCube from './cube/small_cube';
import Term from './scrolling_text';

export default class App extends Component {
  render() {
    return (
      <div className="row top-buffer">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Will's Wonderful Cube</h3>
            </div>
            <div className="panel-body black">
              <div className="big-space">
                <Cube />
                <SmallCube />
                <div className="brk" />
                <Term />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
