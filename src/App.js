import React from "react";
import { Todos } from "./components/Todos/Todos.js";
import AddTodo from "./components/AddTodo/AddTodo.js";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.LS_KEY = "todo's_app";

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.getFromLS(this.LS_KEY);
  }

  getFromLS(key) {
    const todos = JSON.parse(localStorage.getItem(key));
    if (todos) {
      this.setState({
        todos,
      });
    }
  }

  putInLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState(
      {
        todos: newTodos,
      },
      () => {
        this.putInLS(this.LS_KEY, this.state.todos);
      }
    );
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState(
      {
        todos: [...this.state.todos, todo],
      },
      () => {
        this.putInLS(this.LS_KEY, this.state.todos);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <h1 className="todo__list-name">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
