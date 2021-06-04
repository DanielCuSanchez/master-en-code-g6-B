import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    console.log("En el constructor");
    super(props);
    this.state = {
      items: [
        { id: 0, value: "Aprender JS", checked: true },
        { id: 1, value: "Aprender React", checked: false },
      ],
      newTodo: "",
    };
  }

  changeNewTodoValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addNewTodo = (e) => {
    e.preventDefault();
    if (!this.state.newTodo) {
      return;
    }
    let todos = this.state.items;
    let newTodo = {
      id: todos.length,
      value: this.state.newTodo,
      checked: false,
    };

    todos.push(newTodo);
    this.setState({ items: todos, newTodo: "" });
  };

  toggleCheckbox = (event) => {
    const idInput = Number(event.target.id);
    const item = this.state.items.find((item) => item.id === idInput);
    item.checked = !item.checked;
    this.setState({ items: this.state.items }); // Cambio de estado para repintar
  };

  initState = () => {
    const savedState = JSON.parse(window.localStorage.getItem("stateTodoList"));
    console.log(savedState);
    this.setState(savedState);
  };

  componentDidMount() {
    console.log("En el método componentDidMount");
    this.initState();
  }

  saveState = () => {
    window.localStorage.setItem("stateTodoList", JSON.stringify(this.state));
  };
  componentDidUpdate() {
    console.log("En el método componentDidUpdate");

    this.saveState();
  }

  componentWillUnmount() {
    console.log("En el método componentWillUnmount");
  }

  render() {
    console.log("En el método render");
    return (
      <div className="todo-list">
        <form className="add-form">
          <input
            type="text"
            className="add-input"
            id="input1"
            name="input1"
            value={this.state.newTodo}
            onChange={this.changeNewTodoValue}
            placeholder="Añade una tarea..."
          />
          <button className="add-button" onClick={this.addNewTodo}>
            Agregar
          </button>
        </form>

        <ul className="list">
          {this.state.items.map((item, i) => (
            <TodoItem key={i} {...item} onToggleCheckbox={this.toggleCheckbox} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
