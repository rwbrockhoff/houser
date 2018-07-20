import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import {Link} from 'react-router-dom';

//--Components---//
import Header from './component/Header/Header';
// ------ //

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Link to="/"> Dashboard </Link>

        <Link to="/wizard"> Wizard </Link>

       

        {routes}
      </div>
    );
  }
}

export default App;
