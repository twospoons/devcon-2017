import React, {Component} from 'react';
import logo from './logo.svg';

//styles
import './App.less';
import './App.scss';
import './App.styl';

import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2 className="App-title"> Welcome to Dev Con 2017</h2>
        </div>
        <UserList />
      </div>
    )
  }
}

export default App;
