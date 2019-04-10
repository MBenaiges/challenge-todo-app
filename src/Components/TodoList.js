import React, { Component } from 'react';
import todosServices from '../Services/todosServices'

class TodoList extends Component {
  state = {
    data: [],
    todos: [],
  }
  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
  
    todosServices.getAll()
      .then(data => {
        data.forEach((todo,index) => {
          
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const {title, body } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default TodoList;