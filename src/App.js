import React, { Component } from 'react';
import Todo from './components/todo_DB';
// import Todo_noDB from './components/todo_noDB_Ob';
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        {/* The folowing component dosnt use DB */}
        {/* <Todo_noDB/> */}
        {/* The folowing component uses DB */}
        <Todo/>
      </div>
    );
  }
}

export default App;
