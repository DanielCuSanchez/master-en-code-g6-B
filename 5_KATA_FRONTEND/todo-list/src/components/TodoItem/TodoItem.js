import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className="list-item">
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.props.onToggleCheckbox}
        />
        {this.props.value}
        <span>❌</span>
      </li>
    );
  }
}

export default TodoItem;
