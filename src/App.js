import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';
import newTodo from './Pages/newTodo';


class App extends Component {
  render() {
    return (
      <div className="App">

        List TODO
        <Switch>
          <Link to="/create" component={newTodo}>Add Todo</Link>
        </Switch>

      </div>
    );
  }
}

export default App;