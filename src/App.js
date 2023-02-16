import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import TodoReducer from "./context/reducer";

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";


const App = () => {

  const [todos, dispatch] = useReducer(TodoReducer, []);


  return (

    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container>
        <h1>Todo App With Context API and Reducer</h1>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider>
  );
};



export default App;
