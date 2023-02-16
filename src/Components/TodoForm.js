import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
} from "reactstrap";


import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";

import { ADD_TODO } from "../context/action.types";



const TodoForm = () => {
  const [todoString, setTodoSting] = useState("");
  const { dispatch } = useContext(TodoContext);


  const handleSubmit = e => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Enter The Todo");
    }

    const todo = {
      todoString,
      id: v4()
    }

    dispatch({
      type: ADD_TODO,
      payload: todo
    });
    setTodoSting("")
  };


  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todp"
            placeholder="Your next Todo"
            value={todoString}
            onChange={e => setTodoSting(e.target.value)}
          />
          <Button
            color="warning"
            className="px-3 py-2"
          >Add
          </Button>

        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default TodoForm;


