import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

import { REMOVE_TODO } from "../context/action.types";
import { TodoContext } from "../context/TodoContext";

const Todos = () => {

  const { todos, dispatch } = useContext(TodoContext);
  return (
    <ListGroup className="mt-5 mb-2 items">
      <h4 className="text-white">Number of Tasks to Complete: {todos.length}</h4>
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}

          <span className="float-end remove-btn"
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id
              })
            }}
          ><FaCheckDouble /></span>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
export default Todos;