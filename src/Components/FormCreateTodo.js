import React, { Component } from 'react';

class FormCreateTodo extends Component {
  state = {
    title: '',
    body: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {

    return (
      <div>
        <h1>Form create</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Create</button>
          <input placeholder="title..." onChange={this.handleChange} value={this.state.title} name="title" type="text" />
          <input placeholder="body..." onChange={this.handleChange} value={this.state.body} name="body" type="text" />        
        </form>
      </div>
    );
  }
}

export default FormCreateTodo;