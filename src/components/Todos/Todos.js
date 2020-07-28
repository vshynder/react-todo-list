import React from "react";
import "./todos.scss";

export const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((el) => {
      return (
        <li
          className="todo__list-item todo__list-item--exist"
          onClick={() => deleteTodo(el.id)}
          key={el.id}
        >
          {el.content}
        </li>
      );
    })
  ) : (
    <li className="todo__list-item">You have no todo's</li>
  );
  return <ul className="todo__list">{todoList}</ul>;
};
