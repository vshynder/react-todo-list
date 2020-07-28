import React from "react";
import "./addtodo.scss";

export default class AddTodo extends React.Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form className="add-todo__form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Add todo's"
            className="add-todo__input"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
