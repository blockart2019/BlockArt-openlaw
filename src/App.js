import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Configure from './Configure'
//import HDwallet from './HDwallet'
//import IPFS from './IPFS'
import OpenLaw from './OpenLaw'
//import IDregistry from './IDregistry'
//import AuditLog from './AuditLog'
//import Chainlink from './Chainlink'
//import Rhombus from './Rhombus'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <header className="samplesHeader">
            <div className="row col-sm-12">
              <div className="col-sm-2"></div>
              <div className="col-sm-2">
                <img src={process.env.PUBLIC_URL + '/imgs/logo.svg'} alt="" className="mk-logo__title"></img>
                <br />
                <small style={{color:'white'}}>samples gallery</small>
              </div>
              <div className="col-sm-8">
                <Link to="/">
                  <button className="btn btn-link">OpenLaw</button>
                </Link>
              </div>
            </div>
          </header>
          <div>
            <Route exact path="/" component={OpenLaw} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
