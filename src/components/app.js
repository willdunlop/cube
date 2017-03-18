import React, { Component } from 'react';
import Cube from './cube/cube';

export default class App extends Component {
  render() {
    return (
      <div className="row top-buffer">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Will's Wonderful Cube</h3>
            </div>
            <div className="panel-body">
              <div className="big-space">
                <Cube />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
