import React, { Component } from 'react';

import todosServices from '../Services/todosServices';
import FormCreateTodo from '../Components/FormCreateTodo';

class NewTodo extends Component {

  state = {
    error: null,
  }

  handleSubmit = (data) => {
    todosServices.createTodos(data)
      .then((result) => {
        this.props.history.push("/");
      })
      .catch(error => {
        if (error.response.data.error) {
          this.setState({
            error: error.response.data.code,
          })
        } else {
          console.log(error)
        }
      })
  }
  render() {
    return (
      <div>
        <FormCreateTodo onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewTodo;
