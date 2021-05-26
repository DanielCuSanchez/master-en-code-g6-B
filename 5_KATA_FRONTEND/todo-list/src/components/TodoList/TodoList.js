import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 0, value: 'comprar leche', checked: true },
        {id: 1, value: 'comprar leche', checked: false}
      ],
      newTodo: '',
    }
  }

  changeNewTodoValue = (event) => {
    this.setState({ newTodo: event.target.value })
  }

  addNewTodo = (e) => {
    e.preventDefault()
    if(!this.state.newTodo){
      return
    }
    let todos = this.state.items
    let newTodo = {
      id: todos.length,
      value: this.state.newTodo,
      checked: false
    }
    todos.push(newTodo)
    this.setState({ items: todos, newTodo: '' })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" 
            id="input1" 
            name="input1"
            value={this.state.newTodo} 
            onChange={this.changeNewTodoValue}
            placeholder="Añade una tarea..." />
          <button onClick={this.addNewTodo}>
            Agregar
          </button>
        </form>

        <ul>
          { 
            this.state.items
              .map((item, i) => <li key={i}>{item.checked.toString()} {item.value} {item.id}</li>)
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;