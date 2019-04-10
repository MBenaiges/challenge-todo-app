import axios from 'axios';

class TodosServices {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  getAllTodos() {
    return this.api.get('/api/v1/todos')
      .then(({ data }) => data)

  }

  createTodos(body) {
    return this.api.post('api/v1/todos', body)
      .then(({ data }) => data)
  }

  getTodo(id) {
    return this.api.get(`/api/v1/todos/${id}`)
      .then(({ data }) => data)

  }

  deleteTodo(id) {
    return this.api.delete(`/api/v1/todos/${id}`)
    .then(({data}) => data)
  }
}

const todosServices = new TodosServices();
export default todosServices;