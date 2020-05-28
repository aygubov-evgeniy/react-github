import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import UsersList from './components/UsersList';
import SingleUser from './components/UsersList/SingleUser';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <UsersList></UsersList>
            </Route>

            <Route path="/users/:id" children={<SingleUser/>}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
